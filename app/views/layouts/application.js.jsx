<!DOCTYPE html>
<html>
  <head>
    <title>Reactutrial</title>
    <%= csrf_meta_tags %>

    <%= stylesheet_link_tag    'application', media: 'all', 'data-turbolinks-track': 'reload' %>
    <%= javascript_include_tag 'application', 'data-turbolinks-track': 'reload' %>
  </head>

  <body>
    <%= react_component('HelloMessage', name: 'John') %>
    <!-- becomes: -->
    <div data-react-class="HelloMessage" data-react-props="{&quot;name&quot;:&quot;John&quot;}"></div>

    <%= yield %>
  </body>
</html>
