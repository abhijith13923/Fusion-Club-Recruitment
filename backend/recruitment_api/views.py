from django.shortcuts import render

import csv
import os
import json
from django.views import View
from django.http import JsonResponse, HttpResponse
from django.conf import settings
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.contrib.admin.views.decorators import staff_member_required


CSV_PATH = os.path.join(settings.BASE_DIR, "data", "applications.csv")

FIELDS = [
    "full_name",
    "reg_id",
    "email",
    "contact",
    "teams",
    "experience",
    "instagram",
    "github",
    "linkedin",
    "fit_reason",
    "expectations",
    "source",
]


@method_decorator(csrf_exempt, name="dispatch")
class SubmitApplicationView(View):
    def post(self, request):
        data = json.loads(request.body)
        file_exists = os.path.exists(CSV_PATH)

        with open(CSV_PATH, "a", newline="", encoding="utf-8") as f:
            writer = csv.DictWriter(f, fieldnames=FIELDS)

            if not file_exists:
                writer.writeheader()

            writer.writerow({
                "full_name": data.get("name"),
                "reg_id": data.get("regId"),
                "email": data.get("email"),
                "contact": data.get("contact"),
                "teams": ", ".join(data.get("teams", [])),
                "experience": data.get("experience"),
                "instagram": data.get("instagram"),
                "github": data.get("github"),
                "linkedin": data.get("linkedin"),
                "fit_reason": data.get("fitReason"),
                "expectations": data.get("expectations"),
                "source": data.get("source"),
            })

        return JsonResponse({"success": True})

@method_decorator(staff_member_required, name="dispatch")
class DownloadCSVView(View):
    def get(self, request):
        if not os.path.exists(CSV_PATH):
            return HttpResponse("No data yet")

        with open(CSV_PATH, "rb") as f:
            response = HttpResponse(f.read(), content_type="text/csv")
            response["Content-Disposition"] = 'attachment; filename="applications.csv"'
            return response

