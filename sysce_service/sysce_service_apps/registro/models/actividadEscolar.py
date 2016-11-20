from django.db import models
from .salon import Salon


# Create your models here.


class ActividadEscolar(models.Model):

    actividad = models.CharField(max_length=60, blank=True, null=True)
    descripcion = models.TextField()
    fecha_emicion = models.DateField(blank=True, null=True)
    fecha_actividad = models.DateField(blank=True, null=True)
    hora_activdad = models.DateTimeField(blank=True, null=True)
    estado = models.BooleanField(default=False)

    class Meta:
        verbose_name = "ActividadEscolar"
        verbose_name_plural = "ActividadesEscolares"

    def __str__(self):
        return self.actividad
