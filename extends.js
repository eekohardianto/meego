<script type = "text/javascript" >
history.pushState(null, null, '#');
window.addEventListener('popstate', function(event)
{
history.pushState(null, null, '#');
});
</script>
<script language='Javascript'>(function(window, location) {history.replaceState(null, document.title, location.pathname+"#!/history");history.pushState(null, document.title, location.pathname);window.addEventListener("popstate", function() {if(location.hash === "#!/history") {history.replaceState(null, document.title, location.pathname);setTimeout(function(){location.replace("https://www.meego.id/");},0);}}, false);}(window, location));</script>
