from django.shortcuts import render
from django.http import HttpResponse
from portfolio.models import Project

# Create your views here.

def home(request):
    projects = Project.objects.all()
    context = {
        'projects': projects,
    }
    return render(request, 'home.html', context)