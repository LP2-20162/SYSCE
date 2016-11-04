from django.db import models
from .docente import Docente


class Curso(models.Model):

    nombre = models.CharField(max_length=60, blank=True, null=True)
    horas = models.IntegerField(blank=True, null=True)
    estado = models.BooleanField(default=False)
    docente = models.ForeignKey('Docente')

    class Meta:
        verbose_name = "Curso"
        verbose_name_plural = "Cursos"

    def __str__(self):
        return self.nombre
