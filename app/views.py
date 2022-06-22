from django.shortcuts import render
from django.contrib.auth.decorators import login_required



# Create your views here.

def home(request):
    return render(request, 'school/home.html')

@login_required(login_url='login')
def read(request):
    return render(request, 'school/read.html')

@login_required(login_url='login')
def math(request):
    return render(request, 'school/math.html')

@login_required(login_url='login')
def color(request):
    return render(request, 'school/color.html')

@login_required(login_url='login')
def environment(request):
    return render(request, 'school/environment.html')

@login_required(login_url='login')
def comp(request):
    return render(request, 'school/computer.html')

@login_required(login_url='login')
def religion(request):
    return render(request, 'school/religion.html')

