from portfolio.views import home,about,project_detail,budget
from django.urls import path    



urlpatterns = [
    path('', home, name='home'),
    path('about/', about, name='about'),
    path('budget/', budget, name='budget'),
    path('projects/<int:project_id>/', project_detail, name='project_detail'),
]

