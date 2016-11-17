from django.db import models
from .curso import Curso
from .salon import Salon


class CargaAcademica(models.Model):

    salon = models.ForeignKey('Salon')
    curso = models.ManyToManyField('Curso')
    estado = models.BooleanField(default=False)

    class Meta:
        verbose_name = "CargaAcademica"
        verbose_name_plural = "CargasAcademicas"

    def __str__(self):
        return "%s %s %s" % (self.curso, ",", self.salon)
