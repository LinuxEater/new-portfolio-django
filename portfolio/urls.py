from portfolio.views import home
from django.urls import path    



urlpatterns = [
    path('', home, name='home'),  # Include the portfolio app URLs
]
