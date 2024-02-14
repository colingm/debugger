(function (apiKey) {
    window.addEventListener('click', function(e) {
        if (window._stopcapture) {
            e.stopPropagation();
        }
    }, true);

    var wdio = {
        options: {
            apiKey,
            visitor: {
                id: 'wdio@pendo.io',
                idList: ['wdio@pendo.io', 'wdio2@pendo.io'],
                department: 'Engineering',
                Department: 'R&D',
                role: 'Manager',
                location: 'Raleigh'
            },
            account: {
                id: 'test',
                idList: ['test', 'test2']
            }
        }
    };

    window.wdio = wdio;
    window.PendoConfig = wdio.config;

    var params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop)
    });
    if (params['top_only'] && window !== window.top) {
        return;
    }

    (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=[];
v=['initialize','identify','updateOptions','pageLoad', 'track', 'addExtension'];for(w=0,x=v.length;w<x;++w)(function(m){
o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo-dev.pendo-dev.com/agent/static/'+apiKey+'/pendo.js';
z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');

    wdio.options.events = {
        ready: function() {
            setTimeout(function() {
                // guidesLoaded triggers before the first guide loop iteration
                // so give it a chance to run
                document.body.classList.add('ready');
            }, 100);
        }
    };

    pendo.initialize(wdio.options);
})('244fa046-af8a-40c4-796c-39f59a6a52d8');
