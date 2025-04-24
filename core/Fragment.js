import { Layout } from "./Layout.js";
import { Tween } from './Tween.js';


export class Fragment {
    constructor() {
        this.width = 1;
        this.height = 1;
        this.layout = new Layout(0, 0, this.width, this.height);
        this.tweens = [];
        this.firstTime = true;
        this.activity = null;
    }

    onResize(width, height) {
        this.width = width;
        this.height = height;
    
        this.layout.resize(width, height);
    }
    addTween(tween) {
        this.tweens.push(tween);
        return tween;
    }
    onCreate()
    {

        if (this.firstTime)
        {
            this.create(); 
            this.firstTime = false;
            return;
        }
        
    }
    onUpdate(dt) {
        for (let i = 0; i < this.tweens.length; ++i)
            this.tweens[i].update(dt);
        this.tweens = this.tweens.filter(t => !t.done || !t.autoremove);

        this.update(dt);
        this.layout.update(dt);
    }
    onRender(g) {
        this.render(g);
        this.layout.render(g);

    }
    onHandleMouse(type, x, y, button) {
        if (this.layout)
        {

            if (this.layout.handleMouse(type, x, y, button)) return true;
        }
        return this.handleMouse(type, x, y, button);
    }
    onClose()
    {

        this.close();
    }

    onEnter() {
        this.enter();

    }

    //virtuals

    enter() { }

    create() { }

    update(dt) { }

    render(g) { }

    handleMouse(type, x, y, button) { }

    close() { }
}


export class FragmentTransition {
    constructor(duration = 1.0) {
        this.duration = duration;
        this.time = 0;
        this.finished = false;
        this.fragment = null;
        this.old = null;
        this.tweens = [];
        this.width = 1;
        this.height = 1;
    }

    

    addTween(tween) {
        this.tweens.push(tween);
        return tween;
    }
    start(fragment, old = null)
    {
        this.fragment = fragment;
        this.old = old;
        this.time = 0;
        this.finished = false;
    }
 

    update(dt) {

        for (let i = 0; i < this.tweens.length; ++i)
        {
            this.tweens[i].update(dt);
        }
        this.tweens = this.tweens.filter(t => !t.done || !t.autoremove);
        this.time += dt;
        if (this.time >= this.duration)
        {
            this.finished = true;
        }
        if (this.fragment)
            this.fragment.onUpdate(dt);
    }

    render(g) {
        // Implementado nas subclasses
    }

    isFinished() {
        return this.finished;
    }
}

export class FadeInTransition extends FragmentTransition
{

    render(g)
    {
        const alpha = Math.min(1, this.time / this.duration);
        const oldalpha = g.ctx.globalAlpha;
        g.ctx.globalAlpha = alpha;
        if (this.fragment)
            this.fragment.onRender(g);
      //  console.log("alpha", alpha);

        g.ctx.globalAlpha = oldalpha;
    }
}

export class FadeOutTransition extends FragmentTransition {
    render(g) {
        const alpha = 1 - Math.min(1, this.time / this.duration);
        const oldalpha = g.ctx.globalAlpha;
        g.ctx.globalAlpha = alpha;


        if (this.fragment)
            this.fragment.onRender(g);

        g.ctx.globalAlpha = oldalpha;
    }
}


export class SlideLeftTransition extends FragmentTransition
{
    constructor(duration = 1.0)
    {
        super(duration);
        this.timeA = 0;
        this.timeB = 0;
        this.addTween(new Tween(this, "timeA", 1, 0, this.duration, Tween.EASE_OUT_BOUNCE, Tween.MODE_ONCE));
        this.addTween(new Tween(this, "timeB", 0, 1, this.duration, Tween.EASE_OUT_BACK, Tween.MODE_ONCE));
    } 

    render(g)
    {
         const w = this.width;

         
         // Slide out old fragment (move para a esquerda)
         if (this.old)
        {
            g.ctx.save();
            g.ctx.translate(-this.timeB * w -(w*0.5), 0);
             this.old.onRender(g);
            g.ctx.restore();
        }

        // Slide in new fragment (entra da direita)
        if (this.fragment)
        {
            g.ctx.save();
            g.ctx.translate(this.timeA * w, 0);
            this.fragment.onRender(g);
            g.ctx.restore();
        }
 
        g.ctx.restore();
    }
}

export class SlideRightTransition extends FragmentTransition
{
    constructor(duration = 1.0)
    {
        super(duration);
        this.time = 0;
        this.timeA = 0;
        this.timeB = 0;
        this.addTween(new Tween(this, "timeA", 1, 0, this.duration, Tween.EASE_OUT_BOUNCE, Tween.MODE_ONCE));
        this.addTween(new Tween(this, "timeB", 0, 1, this.duration, Tween.EASE_OUT_BACK, Tween.MODE_ONCE));
 
    }
    render(g)
    {
         const w = this.width;

         
         
         if (this.old)
        {
            g.ctx.save();
            g.ctx.translate(this.timeB * w +(w*0.5), 0);
            this.old.onRender(g);
            g.ctx.restore();
        }

        // Slide in new fragment (entra da direita)
        if (this.fragment)
        {
            g.ctx.save();
            g.ctx.translate(-this.timeA * w, 0);
            this.fragment.onRender(g);
            g.ctx.restore();
        }
    }
}



export class Navigator {

    static instance = null;
    constructor() {
        this.fragmentMap = new Map();
        this.activeFragment = null;
        this.pendingFragment = null;
        this.outTransition = null;
        this.inTransition = null;
        this.isTrasition = false;
        this.width = 0;
        this.height = 0;
        this.realWidth = 0;
        this.realHeight = 0;

    }

    static Instance() {
        if (!Navigator.instance) {
            Navigator.instance = new Navigator();
        }
        return Navigator.instance;
    }

    setFragment(name) {

        if (this.activeFragment)
        {
            this.activeFragment.onClose();
        }
        const newFrag = this.fragmentMap.get(name);
        if (!newFrag || newFrag === this.activeFragment)
        {
            console.log("Fragmento não encontrado");
            return;
        }
        this.activeFragment = newFrag;
        this.activeFragment.onResize(this.width, this.height);
        this.activeFragment.onCreate();
    }

    addFragment(name, fragment) {

        fragment.width = this.width;
        fragment.height = this.height;
        this.fragmentMap.set(name, fragment);
    }

    switchFragment(name, outTransition = null, inTransition = null)
    {
        const newFrag = this.fragmentMap.get(name);
        if (!newFrag || newFrag === this.activeFragment) return;

        this.pendingFragment = newFrag;
        this.outTransition = outTransition;
        this.inTransition = inTransition;

        if (!outTransition && !inTransition)
        {
            if (this.activeFragment) this.activeFragment.onClose();
            this.activeFragment = this.pendingFragment;
            this.pendingFragment = null;
            this.activeFragment.onResize(this.width, this.height);
            this.activeFragment.onCreate();
            return;
        }

        // Preparar fragmento novo (antes da transição in)
        if (inTransition)
        {
            inTransition.width = this.width;
            inTransition.height = this.height;
            this.pendingFragment.onResize(this.width, this.height);
            this.pendingFragment.onCreate();
        }

        // Iniciar transição de saída, se existir
        if (outTransition && this.activeFragment)
        {
            outTransition.width = this.width;
            outTransition.height = this.height;
            this.outTransition.start(this.activeFragment,this.pendingFragment);
        }
        else if (inTransition)
        {
            // Se só há transição de entrada

            this.inTransition.start(this.pendingFragment,this.activeFragment);
            this.activeFragment = this.pendingFragment;
            this.pendingFragment = null;
 
        }
    }

 





    resize(rw, rh, w, h)
    {
        this.width = w;
        this.height = h;
        this.realWidth = rw;
        this.realHeight = rh;

        if (this.activeFragment)
        {
            //   console.log("navigation resize", w, h);
            this.activeFragment.onResize(w, h);
        }

    }

    handleMouse(type, x, y, button) {
        // console.log("frgment handleMouse", type, x, y, button);
        if (this.activeFragment) {
            if (this.activeFragment.onHandleMouse(type, x, y, button))
            {
                return true;
            }
        }
        return false;
    }
    _finalizeSwitch()
    {
        if (this.activeFragment)
        {
        
            this.activeFragment.onClose();
        }

        this.activeFragment = this.pendingFragment;
        this.pendingFragment = null;

        if (this.activeFragment)
        {
            this.activeFragment.onResize(this.width, this.height);
            this.activeFragment.onCreate();
        }

        if (this.inTransition)
        {
            this.inTransition.fragment = this.activeFragment;
            this.inTransition.start(this.activeFragment);
        }
    }

    update(g, dt)
    {   

      
        if (this.outTransition)
        {
            this.outTransition.width  = this.width;
            this.outTransition.height = this.height;
            this.outTransition.update(dt);
            this.outTransition.render(g);
            if (this.outTransition.isFinished())
            {
                this.outTransition = null;
                 this._finalizeSwitch(); 
            }
            return;
        }
    
        if (this.inTransition)
        {
            this.inTransition.width  = this.width;
            this.inTransition.height = this.height;
            this.inTransition.update(dt);
            this.inTransition.render(g);
            if (this.inTransition.isFinished())
            {
                this.inTransition = null;
            }
            return;
        }
    
        if (this.activeFragment)
        {
            this.activeFragment.onUpdate(dt);
            this.activeFragment.onRender(g);
        }
    }
    
    

}
