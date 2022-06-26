from django.shortcuts import render
from .models import Result
from django.views.generic import ListView




def Results(request):
    results=Result.objects.all()
    context={'results':results}
    return render(request, 'quizes/results.html', context)
