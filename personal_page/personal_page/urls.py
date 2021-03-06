"""personal_page URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls import url, include
from django.contrib import admin
from django.views import generic
from rest_framework.routers import DefaultRouter
from websites import views as websiteViews
from pictures import views as pictureViews
from resume import views as resumeViews
from misc import views as miscViews

router = DefaultRouter()
router.register(r'sites', websiteViews.WebsiteViewSet)
router.register(r'pictures', pictureViews.PictureViewSet)
router.register(r'resume', resumeViews.ResumeViewSet)
router.register(r'misc', miscViews.MiscViewSet)

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', generic.TemplateView.as_view(template_name='main.html')),
    url(r'^', include(router.urls)),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
