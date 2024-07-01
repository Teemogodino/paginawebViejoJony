from django.db import models

class Producto(models.Model):

    id_producto = models.CharField(max_length=4, primary_key= True)
    nombre_producto = models.CharField(max_length=30)
    precio = models.IntegerField()
    stock = models.IntegerField()
    imagen = models.CharField(max_length=250)
    categoria = models.CharField(max_length=50)

class Usuario(models.Model):
    id_usuario = models.CharField(max_length=4, primary_key=True)
    nombre_usuario = models.CharField(max_length=20)
    contraseña = models.CharField(max_length= 20)

class Carrito(models.Model):
    id_producto_carrito = models.CharField(max_length=4, primary_key= True)
    nombre_producto = models.CharField(max_length=30)
    precio = models.IntegerField()
    stock = models.IntegerField()
    imagen = models.CharField(max_length=250)
    categoria = models.CharField(max_length=50) 
