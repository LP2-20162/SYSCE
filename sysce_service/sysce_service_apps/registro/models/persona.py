from uuid import uuid4
from django.db import models

# Create your models here.


class Persona(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)

    nombre = models.CharField(max_length=60, blank=True, null=True)
    apellido_paterno = models.CharField(max_length=60, blank=True, null=True)
    apellido_materno = models.CharField(max_length=60, blank=True, null=True)
    dni = models.IntegerField(blank=True, null=True)
    telefono = models.IntegerField(blank=True, null=True)
    sexo = models.BooleanField(default=False)
    email = models.EmailField(
        help_text='ejemplo@email.com', unique=True, blank=True, null=True)
    fecha_nacimiento = models.DateField(blank=True, null=True)
    lugar_nacimiento = models.CharField(max_length=60, blank=True, null=True)
    direccion = models.CharField(max_length=60)
    foto = models.ImageField(upload_to='/imagenes', blank=True, null=True)

    class Meta:
        verbose_name = "Persona"
        verbose_name_plural = "Personas"

    def __str__(self):
        return " %s %s %s " % (self.nombre, ",", self.apellido_paterno)
