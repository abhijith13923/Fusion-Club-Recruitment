from django.urls import path
from .views import SubmitApplicationView, DownloadCSVView

urlpatterns = [
    path("submit/", SubmitApplicationView.as_view()),
    path("download/", DownloadCSVView.as_view()),
]
