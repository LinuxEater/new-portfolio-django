from django.shortcuts import render, redirect
from django.http import HttpResponse
from portfolio.models import Project
from django.core.mail import send_mail
from django.contrib import messages

# Create your views here.

def home(request):
    projects = Project.objects.all()
    context = {
        'projects': projects,
    }
    return render(request, 'home.html', context)

def about(request):
    return render(request, 'about.html')

def budget(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        project_type = request.POST.get('project_type')
        description = request.POST.get('description')

        subject = f'New Budget Request from {name}'
        message = f'''
        You have received a new budget request.

        Name: {name}
        Email: {email}
        Project Type: {project_type}
        Description:
        {description}
        '''
        from_email = 'moisessouzasantos001@gmail.com'
        recipient_list = ['moisessouzasantos001@gmail.com']

        try:
            send_mail(subject, message, from_email, recipient_list)
            messages.success(request, 'Your request has been sent successfully!')
        except Exception as e:
            messages.error(request, f'Error sending email: {e}')

        return redirect('budget')

    return render(request, 'budget.html')

def project_detail(request, project_id):
    try:
        project = Project.objects.get(id=project_id)
        technologies_list = project.technologies.split(',')  # já gera a lista
    except Project.DoesNotExist:
        return HttpResponse("Project not found", status=404)

    context = {
        'project': project,
        'technologies_list': [tech.strip() for tech in technologies_list],  # tira espaços extras
    }
    return render(request, 'project_detail.html', context)