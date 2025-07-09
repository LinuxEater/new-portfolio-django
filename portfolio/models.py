from django.db import models

# Create your models here.

class Project(models.Model):
    TYPE_CHOICES = [
        ('fullstack', 'fullstack'),
        ('backend', 'backend'),
        ('frontend', 'frontend'),
        ('mobile', 'mobile'),
        ('scraping', 'scraping'),
        ('bots', 'bots'),
        ('data-analysis', 'data-analysis'),
        ('cybersecurity', 'cybersecurity'),
        ]
    
    title = models.CharField(max_length=200)
    description = models.TextField(max_length=1000)
    image = models.ImageField(upload_to='projects/')
    video = models.FileField(upload_to='projects/videos/', blank=True, null=True)
    technologies = models.CharField(max_length=200)
    category = models.CharField(max_length=50, choices=TYPE_CHOICES, null=True, blank=True)
    url_github = models.URLField(blank=True, null=True)
    date = models.DateField()
    url = models.URLField()
    is_featured = models.BooleanField(default=False)
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title 