from django.db import models


class Salon(models.Model):

    nivel = models.CharField(max_length=60, blank=True, null=True)
    grado = models.CharField(max_length=60, blank=True, null=True)
    seccion = models.CharField(max_length=60, blank=True, null=True)
    ubicacion = models.CharField(max_length=60)

    class Meta:
        verbose_name = "Salon"
        verbose_name_plural = "Salones"

    def __str__(self):
        return self.nivel
