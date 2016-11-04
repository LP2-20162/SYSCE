from django.db import models


class Colegio(models.Model):

    nombre = models.CharField(max_length=60, blank=True, null=True)
    direccion = models.CharField(max_length=60)
    departamento = models.CharField(max_length=60, blank=True, null=True)
    provincia = models.CharField(max_length=60, blank=True, null=True)
    distrito = models.CharField(max_length=60, blank=True, null=True)
    telefono_1 = models.IntegerField(blank=True, null=True)
    telefono_2 = models.IntegerField(blank=True, null=True)
    descripcion = models.TextField()

    class Meta:
        verbose_name = "Colegio"
        verbose_name_plural = "Colegios"

    def __str__(self):
        return self.nombre
