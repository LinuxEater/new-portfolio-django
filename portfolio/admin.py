from django.contrib import admin
from .models import Project

# Register your models here.

class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'technologies', 'is_featured', 'created_at')
    search_fields = ('title', 'technologies')
    list_filter = ('category', 'is_featured', 'date')

admin.site.register(Project, ProjectAdmin)

