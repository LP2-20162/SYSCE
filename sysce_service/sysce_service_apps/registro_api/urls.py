from django.conf.urls import url, include
from rest_framework import routers

#from .apoderado_view import ApoderadoViewSet
from .persona_view import PersonaViewSet
from .curso_view import CursoViewSet
from .colegio_view import ColegioViewSet
from .cargoescolar_view import CargoEscolarViewSet

router = routers.DefaultRouter()

#router.register(r'apoderados', ApoderadoViewSet, 'apoderado-view')
router.register(r'personas', PersonaViewSet, 'persona-view')
router.register(r'cursos', CursoViewSet, 'curso-view')
router.register(r'colegios', ColegioViewSet, 'colegio-view')
router.register(r'cargosescolares', CargoEscolarViewSet, 'cargoescolar-view')

urlpatterns = [

    url(r'^', include(router.urls)),

]
