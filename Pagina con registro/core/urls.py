
from django.urls import path 
from . import views
from .views import *
from django.contrib.auth.views import LoginView

urlpatterns = [
    path('', home, name="home"),
    path('login',LoginView.as_view(template_name='core/login2.html'), name="login"),
    path('registro', views.registro , name='registro'),
    path('carrito', carrito , name='carrito'),
]
