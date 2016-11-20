from django.db import models
from .docente import Docente


class Curso(models.Model):

    curso = models.CharField(max_length=60, blank=True, null=True)
    docente = models.ForeignKey('Docente')
    horas = models.IntegerField(blank=True, null=True)
    estado = models.BooleanField(default=False)

    class Meta:
        verbose_name = "Curso"
        verbose_name_plural = "Cursos"

    def __str__(self):
        return self.curso