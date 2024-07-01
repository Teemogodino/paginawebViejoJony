from django.shortcuts import render
from .models import *

def home (request):
    productos   = Producto.objects.all()
    return render(request , 'core/index.html', {'objetoVenta1' :productos})

def login(request):
    return render(request , 'core/login2.html')

def registro(request):
    return render(request , 'core/registro.html')

def carrito(request):
    return render(request, 'core/carritoDeCompras.html')

