from uuid import uuid4
from django.db import models
from .persona import Persona
# Create your models here.


class Apoderado(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)

    persona = models.ForeignKey('Persona')
    estado = models.BooleanField(default=False)

    class Meta:
        verbose_name = "Apoderado"
        verbose_name_plural = "Apoderados"

    def __str__(self):

        return " %s " % (self.persona)
