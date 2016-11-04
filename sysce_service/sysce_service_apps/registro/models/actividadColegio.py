from django.db import models

# Create your models here.


class ActividadColegio(models.Model):

    nombre = models.CharField(max_length=60, blank=True, null=True)
    descripcion = models.TextField()
    fecha_emicion = models.DateField(blank=True, null=True)
    fecha_actividad = models.DateField(blank=True, null=True)
    hora_actividad = models.DateTimeField(blank=True, null=True)
    estado = models.BooleanField(default=False)

    class Meta:
        verbose_name = "ActividadColegio"
        verbose_name_plural = "ActividadesColegio"

    def __str__(self):
        return self.nombre
