from portfolio.views import home
from django.urls import path    
from django.http import HttpResponse


urlpatterns = [
    path('', home, name='home'),  # Include the portfolio app URLs
]
