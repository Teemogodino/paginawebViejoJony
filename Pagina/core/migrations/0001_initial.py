# Generated by Django 5.0.6 on 2024-06-30 19:34

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Producto',
            fields=[
                ('id_producto', models.CharField(max_length=4, primary_key=True, serialize=False)),
                ('nombre_producto', models.CharField(max_length=30)),
                ('precio', models.IntegerField()),
                ('stock', models.IntegerField()),
                ('imagen', models.CharField(max_length=250)),
                ('categoria', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('id_usuario', models.CharField(max_length=4, primary_key=True, serialize=False)),
                ('nombre_usuario', models.CharField(max_length=20)),
                ('contraseña', models.CharField(max_length=20)),
            ],
        ),
    ]