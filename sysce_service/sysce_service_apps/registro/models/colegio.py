from django.db import models


class Colegio(models.Model):

    nombre = models.CharField(max_length=60, blank=True, null=True)
    direccion = models.CharField(max_length=60)
    departamento = models.CharField(max_length=60, blank=True, null=True)

    class Meta:
        verbose_name = "Colegio"
        verbose_name_plural = "Colegios"

    def __str__(self):
        return self.nombre
