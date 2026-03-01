document.addEventListener("DOMContentLoaded", function(){
    console.log("ready");
    //
    const $linksDef = document.querySelectorAll('.def');
    console.log($linksDef);
    const $refsWrapper = document.getElementById('refs');
    console.log($refsWrapper);
    //
    $linksDef.forEach(function($linkDef){
        $linkDef.addEventListener('mouseenter', function(){
            console.log("over elem");
            //
            let target = $linkDef.dataset.ref;
            console.log(target);
            let $targetNode = $refsWrapper.querySelector('#'+target);
            console.log($targetNode);
            $targetNode.classList.remove("hidden");
        });
        $linkDef.addEventListener('mouseleave', function(){
            console.log("leave elem");
            //
            let target = $linkDef.dataset.ref;
            console.log(target);
            let $targetNode = $refsWrapper.querySelector('#'+target);
            console.log($targetNode);
            $targetNode.classList.add("hidden");
        });
    });
});