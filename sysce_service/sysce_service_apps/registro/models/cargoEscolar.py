from django.db import models


class CargoEscolar(models.Model):

    nombre = models.CharField(max_length=60, blank=True, null=True)
    tipo = models.CharField(max_length=60, blank=True, null=True)

    class Meta:
        verbose_name = "CargoEscolar"
        verbose_name_plural = "CargosEscolares"

    def __str__(self):
        return self.nombre
