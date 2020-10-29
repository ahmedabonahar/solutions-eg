from django.utils.html import strip_tags
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from .models import Subscriber


# Create your views here.

class SubscribeAPI(APIView):
  authentication_classes = ()
  permission_classes = []

  def post(self, request):
    data = request.data
    try:
      Subscriber.objects.get(email=data['email'])
      return Response({'is_subscribed': True}, status.HTTP_200_OK)
    except:
      try:
        data = request.data
        email = Subscriber(email=data['email'])
        email.save()
        subject, from_email, to = 'Subscribe', 'hello@solutions-eg.org', data['email']
        text_content = 'Subscribe'
        #  ==========================================================================
        html_content = '<strong>You have subscribed to solutions-eg successfully</strong> '
        # ============================================================================
        msg = EmailMultiAlternatives(
          subject, text_content, from_email, [to])
        msg.attach_alternative(html_content, "text/html")
        msg.send()
        # mail = data['email'].split('@')
        # message = render_to_string('sub_email.html', {
        #   'mail': mail[0],
        #   'image_domain': 'https://scarabaeus-sacer.com',
        # })
        # # Strip the html tag. So people can see the pure text at least.
        # text_content = strip_tags(message)
        # msg = EmailMultiAlternatives(
        #   'Subscribe', text_content, 'admin@scarabaeus-sacer.com', [data['email']])
        # msg.attach_alternative(message, "text/html")
        # msg.send()
        return Response(status.HTTP_200_OK)
      except Exception as e:
        print(e)
        return Response({'exception': str(e)}, status.HTTP_200_OK)


class ContactUs(APIView):
  authentication_classes = ()
  permission_classes = []

  def post(self, request):
    try:
      data = request.data
      subject, from_email, to = 'Contact', 'hello@solutions-eg.org', 'hello@solutions-eg.org'
      text_content = 'Contact Email'
      html_content = '<strong>Name:</strong> ' + data['full_name']
      html_content += '<br><strong>Country:</strong> ' + data['country']
      html_content += '<br><strong>Email:</strong> ' + data['email']
      html_content += '<br><strong>Phone:</strong> ' + data['phone']
      html_content += '<br><strong>Service:</strong> ' + data['service']
      html_content += '<br><strong>Message:</strong> ' + data['message']
      # ============================================================================
      msg = EmailMultiAlternatives(
        subject, text_content, from_email, [to])
      msg.attach_alternative(html_content, "text/html")
      msg.send()
      return Response(status.HTTP_200_OK)
    except Exception as e:
      print(e)
      return Response({'is_error': True}, status.HTTP_200_OK)
