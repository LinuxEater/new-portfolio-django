from django.db import models

# Create your models here.

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(max_length=1000)
    image = models.ImageField(upload_to='projects/')
    video = models.FileField(upload_to='projects/videos/', blank=True, null=True)
    technologies = models.CharField(max_length=200)
    date = models.DateField()
    url = models.URLField()
    is_featured = models.BooleanField(default=False)
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title 