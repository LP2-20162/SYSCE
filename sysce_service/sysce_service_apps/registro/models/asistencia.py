from django.db import models
from .alumno import Alumno
from .curso import Curso


class Asistencia(models.Model):
    alumno = models.ForeignKey('Alumno')
    curso = models.ForeignKey('Curso')
    fecha = models.DateField(blank=True, null=True)
    hora = models.TimeField(auto_now_add=True)
    asiste = models.BooleanField(default=False)

    class Meta:
        verbose_name = "Asistencia"
        verbose_name_plural = "Asistencias"

    def __str__(self):
        pass
        return "%s" % (self.curso)
