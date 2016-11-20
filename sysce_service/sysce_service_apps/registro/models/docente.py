from uuid import uuid4
from django.db import models
#from .libro import Libro
from .persona import Persona


class Docente(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    persona = models.ForeignKey('Persona')
    especialidad = models.CharField(max_length=60, blank=True, null=True)
    estado = models.BooleanField(default=False)

    class Meta:
        verbose_name = "Docente"
        verbose_name_plural = "Docentes"

    def __str__(self):
        return " %s " % (self.persona)
