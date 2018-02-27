import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { trigger, style, animate, transition } from '@angular/animations';

import { Observable } from 'rxjs/Observable';
import { Post } from './post';
import { PostService } from './post.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  animations: [
    trigger('changeAnimateMe', [
      transition('* <=> *', [
        style({opacity: 0}), animate(2000)
      ])
    ])
  ]
})
export class PostComponent implements OnInit, OnDestroy {
  post$: Observable<Post>;
  posts$: Observable<Post[]>;
  postsLength: number;

  postsSubscription: Subscription;

  references = [
    { link: 'https://cli.angular.io/', name: 'Angular CLI' },
    { link: 'https://angular.io/docs', name: 'Angular Documentation' },
    { link: 'https://material.angular.io/', name: 'Angular Material' },
    { link: 'https://firebase.google.com/', name: 'Firebase' }
  ];

  interpolation = {
    name: 'Interpolation',
    code: `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-root',
    template: \`
        <h1>{{ title }}</h1>
        <h2>My favorite hero is: {{ myHero }}</h2>
    \`
  })
  export class AppComponent {
    title = 'Tour of Heroes';
    myHero = 'Flash';
  }
 `};

 ngFor = {
  name: '*ngFor',
  code: `
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
      <h1>{{ title }}</h1>
      <h2>My favorite hero is: {{ myHero }}</h2>
      <p>Heroes</p>
      <ul>
          <li *ngFor="let hero of heroes">
              {{ hero }}
          </li>
      </ul>
  \`
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = ['Flash', 'Wonderwoman', 'Superman', 'Spiderman'];
  myHero = this.heroes[0];
}
`};

class = {
  name: 'Hero Class',
  code: `
  export class Hero {
    constructor(public id: number,
                public name: string) { }
  }
`};

useHeroClass = {
  name: 'Use Hero Class',
  code: `
      template: \`
          <h1>{{ title }}</h1>
          <h2>My favorite hero is: {{ myHero.name }}</h2>
          <p>Heroes:</p>
          <ul>
              <li *ngFor="let hero of heroes">
                  {{ hero.name }}
              </li>
          </ul>
      \`

      heroes = [
        new Hero(1, 'Flash'),
        new Hero(13, 'Wonderwoman'),
        new Hero(15, 'Superman'),
        new Hero(42, 'Spiderman')
      ];
      myHero = this.heroes[0];
  `
};

ngIf = {
  name: '*ngIf',
  code: `
    <p *ngIf="heroes.length > 3">We are many Open Source Heroes</p>
  `
};

interpolationOne = {
  name: 'Interpolation',
  code: `
          <p>My current hero name is {{ currentHero.name }}</p>
          <h3>
              {{ title }}
              <img src="{{ heroImageUrl }}" style="height: 100px">
          </h3>
          <p>The sum of 1 + 1 is {{ 1 + 1 }}</p>
          <p>The sum of 1 + 1 is not {{ 1 + 1 + getNumber() }}</p>
  `
};

templateExpressionsExpressionContext = {
  name: 'Template Expressions Expression Context',
  code: `
        {{ title }}
        <span [hidden]="isUnchanged">changed</span>
        <div *ngFor="let hero of heroes">{{ hero.name }}</div>
        <input #heroInput>{{ heroInput.value }}
  `
};

templateStatementsStatementContext = {
  name: 'Template Statements Statement Context',
  code: `
        <button (click)="deleteHero()">Delete Hero</button>
        <button (click)="onSaveHer($event)">Save Her</button>
        <button *ngFor="let hero of heroes" (click)="deleteHero(hero)">
        {{ hero.name }}
        </button>
        <form #heroForm (ngSubmit)="onSubmit(heroForm)"> ... </form>

  `
};

bindingSyntaxOverview = {
  name: 'Binding Syntax Overview',
  code: `
        // one way from component to view
        {{ expression }}
        [target]="expression"
        bind-target="expression"

        // one way from view to component
        (target)="statement"
        on-target="statement"

        // two way
        [(target)]="expression"
        bindon-target="expression"
  `
};

newMentalModel = {
  name: 'New Mental Model',
  code: `
      <div [class.special]="isSpecial">New Mental Model</div>
      <app-hero-detail></app-hero-detail>
      <button [disabled]="isUnchanged">Save Her</button>
      <img [src]="heroImageUrl">
      <app-hero-detail [hero]="currentHero"></app-hero-detail>
      <div [ngClass]="{ 'special': isSpecial }"></div>
      <button (click)="onSave()">Save</button>
      <app-hero-detail (deleteRequest)="deleteHero()"></app-hero-detail>
      <div (myClick)="clicked=$event" clickable>Click Me</div>
      {{ clicked }}
      <div>
          Hero Name:
          <input [(ngModel)]="name">
      </div>
      <button [attr.aria-label]="help">Help</button>
      <div [class.red]="isRed">Favorite</div>
      <button [style.color]="isSpecial ? 'red' : 'blue'">Special</button>
  `
};

bindingTargets = {
  name: 'Binding Targets',
  code: `
      // Property
      <img [src]="heroImageUrl">
      <app-hero-detail [hero]="currentHero"></app-hero-detail>
      <div [ngClass]="{ 'special': isSpecial }"></div>

      // Event
      <button (click)="onSave()">Save</button>
      <app-hero-detail (deleteRequest)="deleteHero()"></app-hero-detail>
      <div (myClick)="clicked="$event" clickable>Click Me</div>

      // Two Way
      <input [(ngModel)]="name">

      // Attribute
      <button [attr.aria-label]="help">Help</button>

      // Class
      <div [class.special]="isSpecial">Special</div>

      // Style
      <button [style.color]="isSpecial ? 'red' : 'green'">

  `
};

propertyBinding = {
  name: 'Property Binding',
  code: `
      <img [src]="heroImageUrl">
      <img bind-src="heroImageUrl"> // canonical form
      <button [disabled]="isUnchanged">Cancel is disabled</button>
      <div [ngClass]="classes">[ngClass] binding to the classes property</div>
      <app-hero-detail [hero]="currentHero"></app-hero-detail>
      <app-hero-detail prefix="You are my" [hero]="currentHero"></app-hero-detail>

      <p><img src="{{ heroImageUrl }}"> is the <i>interpolated</i> image.</p>
      <p><img [src]="heroImageUrl"> is the <i>property bound</i> image.</p>

      <p><span>"{{ title }}" is the <i>interpolated</i> title.</span></p>
      <p>"<span [innerHTML]="title"></span>" is the <i>property bound</i> title.</p>

      evilTitle = 'Template <script>alert("evil never sleeps")</script>Syntax';

      <p><span>"{{ evilTitle }}" is the <i>interpolated</i> evil title.</span></p>
      <p><span [innerHTML]="evilTitle"></span> is the <i>property bound</i> evil title.</p>
  `
};

attributeBinding = {
  name: 'Attribute Binding',
  code: `
        <table border=1>
                  <tr><td [attr.colspan]="1 + 1">One-Two</td></tr>
                  <tr><td>Three</td><td>Four</td></tr>
        </table>
        <button [attr.aria-label]="actionName">{{ actionName }} with Aria</button>
  `
};

classBinding = {
  name: 'Class Binding',
  code: `
        <div class="nice curly special" [class]="niceCurly">Nice curly</div>
        <div [class.special]="isSpecial">This class binding is special</div>
        <div class="special" [class.special]="!isSpecial">This one is not so special</div>
  `
};

styleBinding = {
  name: 'Style Binding',
  code: `
        <button [style.color]="isSpecial ? 'red' : 'green'">Red</button>
        <button [style.background-color]="canSave ? 'yellow' : 'blue'">Save Her</button>
        <button [style.font-size.em]="isSpecial ? 3 : 1">Big</button>
        <button [style.font-size.%]="!isSpecial ? 150 : 50">Small</button>
  `
};

eventBinding = {
  name: 'Event Binding',
  code: `
      <button (click)="onSave()">Save Her</button>
      <button on-click="onSave()">Save Her</button>
      <div (myClick)="clickMessage=$event" clickable>Click with myClick</div>
      {{ clickMessage }}

      <input [value]="currentHero.name" (input)="currentHero.name=$event.target.value">
  `
};

customEvents = {
  name: 'Custom Events with EventEmitter',
  code: `
    template: \`
          <div>
            <img src="{{ heroImageUrl }}">
            <span [style.text-decoration]="lineThrough">
                {{ prefix }} {{ hero?.name }}
            </span>
            <button (click)="delete()">Delete</button>
          </div>
    \`
    deleteRequest = new EventEmitter<Hero>();
    delete() {
      this.deleteRequest.emit(this.hero);
    }

    <app-hero-detail (deleteRequest)="deleteHero($event)" [hero]="currentHero">
    </app-hero-detail>
  `
};

twoWayBinding = {
  name: 'Two Way Binding',
  code: `
      import { Component, EventEmitter, Input, Output } from '@angular/core';

      @Component({
        selector: 'app-sizer',
        template: \`
            <div>
                <button (click)="decrease()" title="smaller">-</button>
                <button (click)="increase()" title="bigger">+</button>
                <label [style.font-size.px]="size">FontSize: {{ size }}px</label>
            </div>
        \`
      })
      export class SizerComponent {
        @Input() size: number | string;
        @Output() sizeChange = new EventEmitter<number>();

        decrease() {
          this.resize(-1);
        }

        increase() {
          this.resize(+1);
        }


        resize(delta: number) {
          this.size = Math.min(40, Math.max(8, +this.size + delta));
          this.sizeChange.emit(this.size);
        }

      }

      <app-sizer [(size)]="fontSizePx"></app-sizer>
      <div [style.font-size.px]="fontSizePx">Resizable Text</div>

      // desugared
      <app-sizer [size]="fontSizePx" (sizeChange)="fontSizePx=$event"></app-sizer>

  `
};

ngClass = {
  name: 'NgClass',
  code: `
        <div [class.special]="isSpecial">This class binding is special.</div>

        <div [ngClass]="currentClasses">
        This div is initially saveable, unchanged, and special.
        </div>

        currentClasses: {};
        setCurrentClasses() {
          this.currentClasses = {
            'saveable': this.canSave,
            'modified': !this.isUnchanged,
            'special': this.isSpecial
          };
        }
  `
};

ngStyle = {
  name: 'NgStyle',
  code: `
      <div [style.font-size]="isSpecial ? 'x-large' : 'smaller'">
        This div is x-large or smaller.
      </div>
      <div [ngStyle]="currentStyles">
        This div is initially italic, normal weight, and extra large (24px).
      </div>
      currentStyles: {};
      setCurrentStyles() {
        this.currentStyles = {
          'font-style': this.canSave ? 'italic' : 'normal',
          'font-weight': !this.isUnchanged ? 'bold' : 'normal',
          'font-size': this.isSpecial ? '24px' : '12px'
        };
      }

  `
};

ngModel = {
  name: 'NgModel',
  code: `
      import { FormsModule } from '@angular/forms';

      <input [(ngModel)]="currentHero.name">

      <input [value]="currentHero.name" (input)="currentHero.name=$event.target.value">

      <input [ngModel]="currentHero.name" (ngModelChange)="currentHero.name=$event">

      <input [ngModel]="currentHero.name" (ngModelChange)="setUppercaseName($event)">
  `
};

ngIfStructuralDirective = {
  name: 'NgIf',
  code: `
      <app-hero-detail *ngIf="isActive"></app-hero-detail>

      <div [class.hidden]="!isSpecial">Show with class</div>
      <div [class.hidden]="isSpecial">Hide with class</div>
      <app-hero-detail [class.hidden]="isSpecial"></app-hero-detail>

      <div [style.display]="isSpecial ? 'block' : 'none'">Show with style</div>
      <div [style.display]="isSpecial ? 'none' : 'block'">Hide with style</div>

      <div *ngIf="currentHero">Hello, {{ currentHero.name }}</div>
      <div *ngIf="nullHero">Hello, {{ nullHero.name }}</div>
  `
};

ngForOf = {
  name: 'NgForOf',
  code: `
        <div *ngFor="let hero of heroes">{{ hero.name }}</div>
        <app-hero-detail *ngFor="let hero of heroes" [hero]="hero"></app-hero-detail>

        <div *ngFor="let hero of heroes; let i = index;">{{ i + 1 }} - {{ hero.name }}</div>

        <div *ngFor="let hero of heroes; trackBy: trackByHeroes">
            ({{ hero.id }}) {{ hero.name }}
        </div>

        trackByHeroes(index: number, hero: Hero) {
          return hero.id;
        }
  `
};

ngSwitch = {
  name: 'NgSwitch',
  code: `
        <div [ngSwitch]="currentHero.emotion">
              <app-happy-hero *ngSwitchCase="'happy'" [hero]="currentHero">
              </app-happy-hero>
              <app-sad-hero *ngSwitchCase="'sad'" [hero]="currentHero">
              </app-sad-hero>
              <app-confused-hero *ngSwitchCase="'confused'" [hero]="currentHero">
              </app-confused-hero>
              <div *ngSwitchCase="'confused'">
              Are you as confused as {{ currentHero.name }}
              </div>
              <app-unknown-hero *ngSwitchDefault [hero]="currentHero">
              </app-unknown-hero>
        </div>
  `
};

templateReferenceVariable = {
  name: ' Template Reference Variable (#var)',
  code: `
        <input #phone placeholder="phone number">
        <button (click)="callPhone(phone.value)">Call</button>

        <form (ngSubmit)="onSubmit(heroForm)" #heroForm="ngForm">
            <div class="form-group">
                <label for="name">Name
                    <input class="form-control" name="name" required [(ngModel)]="hero.name">
                </label>
            </div>
            <button type="submit" [disabled]="!heroForm.form.valid">Submit</button>
        </form>
        <div [hidden]="!heroForm.form.valid">
            {{ submitMessage }}
        </div>

        <input ref-fax placeholder="fax number">
        <button (click)="callFax(fax.value)">Fax</button>
  `
};

inputOutputProperties = {
  name: 'Input && Output Properties',
  code: `
        <img [src]="iconUrl">
        <button (click)="onSave()">Save</button>

        <app-hero-detail [hero]="currentHero" (deleteRequest)="deleteHero($event)">
        </app-hero-detail>

        @Input() hero: Hero;
        @Output() deleteRequest = new EventEmitter<Hero>();

        @Component({
          inputs: ['hero'],
          outputs: ['deleteRequest']
        })

        <div (myClick)="clickMessage=$event" clickable>click with myClick</div>
        @Output('myClick') clicks = new EventEmitter<string>();

        @Directive({
          outputs: ['clicks:myClick']
        })

  `
};

templateExpressionOperators = {
  name: 'Template Expression Operators',
  code: `
      <div>Title through uppercase pipe: {{ title | uppercase }}</div>
      <div>
            Title through a pipe chain:
            {{ title | uppercase | lowercase }}
      </div>
      <div>
            Birthdate: {{ currentHero?.birthDate | date:'longDate' }}
      </div>
      <div> {{ currentHero | json }}</div>

      <div>The current hero's name is {{ currentHero?.name }}</div>

      <div *ngIf="nullHero">The null hero's name is {{ nullHero.name }}</div>
      <div>The null hero's name is {{ nullHero && nullHero.name }}</div>
      <div>The null hero's name is {{ nullHero?.name }}</div>

      <div *ngIf="hero">
            The hero's name is {{ hero!.name }}
      </div>

      <div>
            The hero's marker is {{ $any(hero).marker }}
      </div>

      <div>
            Undeclared members is {{ $any(this).member }}
      </div>
  `
};

allHooksParent = {
  name: 'All Lifecycle Hooks Parent',
  code: `
  import { Component } from '@angular/core';
  import { LoggerService } from '../logger.service';

  @Component({
    selector: 'app-peek-a-boo-parent',
    template: \`
            <div class="parent">
                <h2>Peek-A-Boo</h2>
                <button (click)="toggleChild()">
                  {{ hasChild ? 'Destroy' : 'Create' }} PeekABooComponent
                </button>
                <button (click)="updateHero()" [hidden]="!hasChild">Update Hero</button>
                <app-peek-a-boo *ngIf="hasChild" [name]="heroName">
                </app-peek-a-boo>
                <h4>-- Lifecycle Hook Log --</h4>
                <div *ngFor="let message of hookLog">
                {{ message }}
                </div>
            </div>
    \`,
    styles: ['.parent { background: moccasin; }'],
    providers: [LoggerService]
  })
  export class PeekABooParentComponent {
    hasChild = false;
    hookLog: string[];
    heroName = 'Flash';

    constructor(private logger: LoggerService) {
      this.hookLog = logger.logs;
     }

     toggleChild() {
       this.hasChild = !this.hasChild;
       if (this.hasChild) {
         this.heroName = 'Flash';
         this.logger.clear();
       }
       this.updateLog();
     }

     updateHero() {
       this.heroName += '!';
       this.updateLog();
     }

     updateLog() {
      this.logger.tick();
      this.hookLog = this.logger.logs;
     }

  }

  `
};

allHooksChild = {
  name: 'All Lifecycle Hooks Child',
  code: `
  import { Component, Input } from '@angular/core';
  import { AfterContentChecked,
           AfterContentInit,
           AfterViewChecked,
           AfterViewInit,
           DoCheck,
           OnChanges,
           OnDestroy,
           OnInit,
           SimpleChanges } from '@angular/core';

  import { LoggerService } from '../logger.service';

  let nextId = 1;

  export class PeekABoo implements OnInit {

  constructor(private logger: LoggerService) { }

  ngOnInit() {
    this.logIt('OnInit');
  }

  logIt(message: string) {
    this.logger.log(\`#\${nextId++} \${message}\`);
  }

}

  @Component({
  selector: 'app-peek-a-boo',
  template: '<p>Now you see my hero, {{ name }}</p>',
  styles: ['p {background: LightYellow; padding: 8px;}']
    })
  export class PeekABooComponent extends PeekABoo
                               implements OnChanges, OnInit, DoCheck, AfterContentInit,
                                          AfterContentChecked, AfterViewInit, AfterViewChecked,
                                          OnDestroy {
  @Input() name: string;

  private verb = 'initialized';

  constructor(logger: LoggerService) {
    super(logger);
    const is = this.name ? 'is' : 'is not';
    this.logIt(\`name \${is} known at construction\`);
  }

  // only called for if there is an @input variable set by parent
  ngOnChanges(changes: SimpleChanges) {
      const changesMessages: string[] = [];
      for (const propertyName in changes) {
        if (propertyName === 'name') {
          const name = changes['name'].currentValue;
          changesMessages.push(\`name \${this.verb} to "\${name}"\`);
        } else {
          changesMessages.push(propertyName + ' ' + this.verb);
        }
      }
      this.logIt(\`OnChanges: \${changesMessages.join('; ')}\`);
      this.verb = 'changed';
  }

  // called in every change detection cycle anywhere on the page
  ngDoCheck() {
    this.logIt('DoCheck');
  }

  ngAfterContentInit() {
    this.logIt('AfterContentInit');
  }

  // called in every change detection cycle anywhere on the page
  ngAfterContentChecked() {
    this.logIt('AfterContentChecked');
  }

  ngAfterViewInit() {
    this.logIt('AfterViewInit');
  }

  // called in every change detection cycle anywhere on the page
  ngAfterViewChecked() {
    this.logIt('AfterViewChecked');
  }

  ngOnDestroy() {
    this.logIt('OnDestroy');
  }

}

  `
};

loggerService = {
  name: 'Logger Service',
  code: `
  import { Injectable } from '@angular/core';

  @Injectable()
  export class LoggerService {
    logs: string[] = [];
    previousMessage = '';
    previousMessageCount = 1;

    log(message: string) {
      if (message === this.previousMessage) {
        this.logs[this.logs.length - 1] = message + \` (\${this.previousMessageCount += 1}x)\`;
      } else {
        this.previousMessage = message;
        this.previousMessageCount = 1;
        this.logs.push(message);
      }
    }

    clear() {
      this.logs = [];
    }

    tick() {
      this.tick_then(() => { });
    }

    tick_then(fn: () => any) { setTimeout(fn, 0); }

  }

  `
};

spyDirective = {
  name: 'Spy Directive',
  code: `
  import { Directive, OnInit, OnDestroy } from '@angular/core';

  import { LoggerService } from '../logger.service';

  let nextId = 1;

  @Directive({
  selector: '[appISpy]'
  })
  export class SpyDirective implements OnInit, OnDestroy {

  private logIt(message: string) {
    this.logger.log(\`Spy #\${nextId++} \${message}\`);
  }

  constructor(private logger: LoggerService) { }

  ngOnInit() {
    this.logIt('onInit');
  }

  ngOnDestroy() {
    this.logIt('onDestroy');
  }

}

  `
};

spyComponent = {
  name: 'Spy Component',
  code: `
  import { Component } from '@angular/core';

  import { LoggerService } from '../logger.service';

  @Component({
    selector: 'app-spy',
    template: \`
              <div class="parent">
                    <h2>Spy Directive</h2>

                    <input [(ngModel)]="newName" (keyup.enter)="addHero()">
                    <button (click)="addHero()">Add Hero</button>
                    <button (click)="reset()">Reset Heroes</button>

                    <p></p>
                    <div *ngFor="let hero of heroes" appISpy class="heroes">
                        {{ hero }}
                        <span (click)="removeHero(hero)">x</span>
                    </div>
                    <h4>-- Spy Lifecycle Hook Log --</h4>
                    <div *ngFor="let message of logger.logs">
                        {{ message }}
                    </div>
              </div>
    \`,
    styles: [
             '.parent { background: khaki; }',
             '.heroes { background: LightYellow; padding: 0 8px; }'
  ],
  providers: [ LoggerService ]
  })
  export class SpyComponent {
    newName = 'Mickey';
    heroes: string[] = ['Wonderwoman', 'Superman'];

    constructor(public logger: LoggerService) { }

    addHero() {
      if (this.newName.trim()) {
        this.heroes.push(this.newName.trim());
        this.newName = '';
        this.logger.tick();
      }
    }

    removeHero(hero: string) {
      this.heroes.splice(this.heroes.indexOf(hero), 1);
      this.logger.tick();
    }

    reset() {
      this.logger.log('-- reset --');
      this.heroes = [];
      this.logger.tick();
    }

  }

  `
};

onChangesComponent = {
  name: 'OnChanges Component',
  code: `
  import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

  class Hero {
    constructor(public name: string) { }
  }


  @Component({
    selector: 'app-on-changes',
    template: \`
      <div class="hero">
          <p>{{ hero.name }} can {{ power }}</p>

          <h4>-- Change Log --</h4>
          <div *ngFor="let change of changeLog">
                  {{ change }}
          </div>
      </div>
    \`,
    styles: [
            '.hero { background: LightYellow; padding: 8px; margin-top: 8px;',
            'p { background: Yellow; padding: 8px; margin-top: 8px; }'
  ]
  })
  export class OnChangesComponent implements OnChanges {
    @Input() hero: Hero;
    @Input() power: string;

    changeLog: string[] = [];

    ngOnChanges(changes: SimpleChanges) {
      for (const propertyName of Object.keys(changes)) {
        const change = changes[propertyName];
        const current = JSON.stringify(change.currentValue);
        const previous = JSON.stringify(change.previousValue);
        this.changeLog.push(\`\${propertyName}: currentValue = \${current},
                                              previousValue= \${previous}\`);
      }
    }

    reset() { this.changeLog = []; }

  }


  /**********************************************************************************/

  @Component({
    selector: 'app-on-changes-parent',
    template: \`
          <div class="parent">
              <h2>{{ title }}</h2>

              <table>
                    <tr><td>Power: </td><td><input [(ngModel)]="power"></td></tr>
                    <tr><td>Hero.name: </td><td><input [(ngModel)]="hero.name"></td></tr>
              </table>
              <p><button (click)="reset()">Reset Log</button></p>

              <app-on-changes [hero]="hero" [power]="power"></app-on-changes>
          </div>
    \`,
    styles: ['.parent { background: Lavender;']
  })
  export class OnChangesParentComponent {
    hero: Hero;
    power: string;
    title = 'OnChanges';
    @ViewChild(OnChangesComponent) childView: OnChangesComponent;

    constructor() {
      this.reset();
    }

    reset() {
      this.hero = new Hero('Flash');
      this.power = 'sing';
      if (this.childView) { this.childView.reset(); }
    }

  }
  `
};

doCheckComponent = {
  name: 'DoCheck Component',
  code: `
  import { Component, DoCheck, Input, ViewChild } from '@angular/core';

  class Hero {
    constructor(public name: string) { }
  }

  @Component({
    selector: 'app-do-check',
    template: \`
          <div class="hero">
                <p>{{ hero.name }} can {{ power }} </p>
                <h4>-- Change Log --</h4>
                <div *ngFor="let change of changeLog">
                          {{ change }}
                </div>
          </div>
    \`,
    styles: [
              '.hero { background: LightYellow; padding: 8px; margin-top: 8px; }',
              'p { background: Yellow; padding: 8px; margin-top: 8px; }'
            ]
  })
  export class DoCheckComponent implements DoCheck {
    @Input() hero: Hero;
    @Input() power: string;

    changeDetected = false;
    changeLog: string[] = [];
    oldHeroName = '';
    oldPower = '';
    oldLogLength = 0;
    noChangeCount = 0;

    constructor() { }

    ngDoCheck() {
        if (this.hero.name !== this.oldHeroName) {
          this.changeDetected = true;
          this.changeLog.push(\`DoCheck: Hero name changed to "\${this.hero.name}"
                               from "\${this.oldHeroName}"\`);
          this.oldHeroName = this.hero.name;
        }

        if (this.power !== this.oldPower) {
          this.changeDetected = true;
          this.changeLog.push(\`DoCheck: Power changed to "\${this.power}"
                               from "\${this.oldPower}"\`);
          this.oldPower = this.power;
        }

        if (this.changeDetected) {
          this.noChangeCount = 0;
        } else {
          const count = this.noChangeCount += 1;
          const noChangeMessage = \`DoCheck called \${count}x when no change to hero or power\`;
          if (count === 1) {
            this.changeLog.push(noChangeMessage);
          } else {
            this.changeLog[this.changeLog.length - 1] = noChangeMessage;
          }
        }
        this.changeDetected = false;

    }

    reset() {
      this.changeDetected = true;
      this.changeLog = [];
    }

  }

  /*********************************************************************************/

  @Component({
    selector: 'app-do-check-parent',
    template: \`
          <div class="parent">
              <h2>{{ title }}</h2>

              <table>
                    <tr><td>Power: </td><td><input [(ngModel)]="power"></td></tr>
                    <tr><td>Hero.name: </td><td><input [(ngModel)]="hero.name"></td></tr>
              </table>
              <p><button (click)="reset()">Reset Log</button></p>

              <app-do-check [hero]="hero" [power]="power"></app-do-check>

          </div>
    \`,
    styles: ['.parent { background: Lavender; }']
  })
  export class DoCheckParentComponent {
      hero: Hero;
      power: string;
      title = 'DoCheck';
      @ViewChild(DoCheckComponent) childView: DoCheckComponent;

      constructor() {
        this.reset();
      }

      reset() {
        this.hero = new Hero('Flash');
        this.power = 'sing';
        if (this.childView) {
          this.childView.reset();
        }
      }

  }
  `
};

afterViewComponent = {
  name: 'AfterView Component',
  code: `
  import { Component, AfterViewChecked, AfterViewInit, ViewChild } from '@angular/core';

  import { LoggerService } from '../logger.service';

  /*****************************************************/
  @Component({
    selector: 'app-child-view',
    template: '<input [(ngModel)]="hero">'
  })
  export class ChildViewComponent {
    hero = 'Flash';
  }

  /*****************************************************/
  @Component({
    selector: 'app-after-view',
    template: \`
        <div>-- child view begins --</div>
        <app-child-view></app-child-view>
        <div>-- child view ends --</div>
    `
    +
    `
    <p *ngIf="comment" class="comment">
        {{ comment }}
    </p>
    \`
  })
  export class AfterViewComponent implements AfterViewChecked, AfterViewInit {
    private previousHero = '';
    comment = '';

    @ViewChild(ChildViewComponent) viewChild: ChildViewComponent;

    constructor(private logger: LoggerService) {
      this.logIt('AfterView constructor');
    }

    ngAfterViewInit() {
      // viewchild is set after view has been initialized
      this.logIt('AfterViewInit');
      this.doSomething();
    }

    ngAfterViewChecked() {
      // viewchild is updated after view has been checked
      if (this.previousHero === this.viewChild.hero) {
            this.logIt('AfterViewChecked (no change)');
      } else {
        this.previousHero = this.viewChild.hero;
        this.logIt('AfterViewChecked');
        this.doSomething();
      }
    }

    private doSomething() {
          const come = this.viewChild.hero.length > 10 ? \`That's a long name\` : '';
          if (come !== this.comment) {
            this.logger.tick_then(() => this.comment = come);
          }
    }

    private logIt(method: string) {
      const child = this.viewChild;
      const message = \`\${method}: \${child ? child.hero : 'no'} child view\`;
      this.logger.log(message);
    }

  }

  /*****************************************************/
  @Component({
    selector: 'app-after-view-parent',
    template: \`
          <div class="parent">
              <h2>AfterView</h2>
              <app-after-view *ngIf="show"></app-after-view>

              <h4>-- AfterView Logs --</h4>
              <p><button (click)="reset()">Reset</button></p>
              <div *ngFor="let message of logger.logs">{{ message }}</div>
          </div>
    \`,
    styles: ['.parent { background: burlywood; }'],
    providers: [ LoggerService ]
  })
  export class AfterViewParentComponent {
          show = true;

          constructor(public logger: LoggerService) { }

          reset() {
            this.logger.clear();
            this.show = false;
            this.logger.tick_then(() => this.show = true);
          }

  }
  `
};

afterContentComponent = {
  name: 'AfterContent Component',
  code: `
  import { Component,
           AfterContentChecked,
           AfterContentInit,
           ContentChild } from '@angular/core';

  import { LoggerService } from '../logger.service';

  /*****************************************************/
  @Component({
    selector: 'app-child',
    template: '<input [(ngModel)]="hero">'
  })
  export class ChildComponent {
    hero = 'Flash';
  }

  /*****************************************************/
  @Component({
    selector: 'app-after-content',
    template: \`
        <div>-- projected content begins --</div>
            <ng-content></ng-content>
        <div>-- projected content ends --</div>
    \`
    +
    \`
    <p *ngIf="comment" class="comment">
        {{ comment }}
    </p>
    \`
  })
  export class AfterContentComponent implements AfterContentChecked, AfterContentInit {
    private previousHero = '';
    comment = '';

    @ContentChild(ChildComponent) contentChild: ChildComponent;

    constructor(private logger: LoggerService) {
      this.logIt('AfterContent constructor');
    }

    ngAfterContentInit() {
      // contentchild is set after content has been initialized
      this.logIt('AfterContentInit');
      this.doSomething();
    }

    ngAfterContentChecked() {
      // contentchild is updated after content has been checked
      if (this.previousHero === this.contentChild.hero) {
            this.logIt('AfterContentChecked (no change)');
      } else {
        this.previousHero = this.contentChild.hero;
        this.logIt('AfterContentChecked');
        this.doSomething();
      }
    }

    private doSomething() {
          this.comment = this.contentChild.hero.length > 10 ? \`That's a long name\` : '';
    }

    private logIt(method: string) {
      const child = this.contentChild;
      const message = \`\${method}: \${child ? child.hero : 'no'} child content\`;
      this.logger.log(message);
    }

  }

  /*****************************************************/
  @Component({
    selector: 'app-after-content-parent',
    template: \`
          <div class="parent">
              <h2>AfterContent</h2>

              <div *ngIf="show">
                <app-after-content>
                    <app-child></app-child>
                </app-after-content>

              <h4>-- AfterView Logs --</h4>
              <p><button (click)="reset()">Reset</button></p>
              <div *ngFor="let message of logger.logs">{{ message }}</div>
          </div>
    \`,
    styles: ['.parent { background: burlywood; }'],
    providers: [ LoggerService ]
  })
  export class AfterContentParentComponent {
          show = true;

          constructor(public logger: LoggerService) { }

          reset() {
            this.logger.clear();
            this.show = false;
            this.logger.tick_then(() => this.show = true);
          }

  }
  `
};

counterComponent = {
  name: 'Counter Component',
  code: `
  import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

  import { LoggerService } from '../logger.service';

  @Component({
    selector: 'app-counter',
    template: \`
            <div class="counter">
                    Counter = {{ counter }}
              <h5>-- Counter Change Log --</h5>
              <div *ngFor="let change of changeLog" appISpy>
                    {{ change }}
              </div>
            </div>
    \`,
    styles: ['.counter { background: LightYellow; padding: 8px; margin-top: 8px; }']
  })
  export class MyCounterComponent implements OnChanges {
         @Input() counter: number;
         changeLog: string[] = [];

        ngOnChanges(changes: SimpleChanges) {
          // empty changelog whenever counter hits zero
          // hint: this is a way to respond programmatically to external value changes.
          if (this.counter === 0) {
            this.changeLog = [];
          }

          // change to counter is the only thing we care about
          const change = changes['counter'];
          const current = change.currentValue;
          // first time is {}; after is integer
          const previous = JSON.stringify(change.previousValue);
          this.changeLog.push(\`counter: currentValue = \${current},
                                         previousValue = \${previous}\`);
        }
  }

  /******************************************************/
  @Component({
    selector: 'app-counter-parent',
    template: \`
            <div class="parent">
                <h2>Counter</h2>

                <button (click)="updateCounter()">Update Counter</button>
                <button (click)="reset()">Reset Counter</button>

                <app-counter [counter]="value"></app-counter>

                <h4>-- Spy Lifecycle Hook Log --</h4>
                <div *ngFor="let message of spyLog">
                      {{ message }}
                </div>
            </div>
    \`,
    styles: ['.parent { background: gold; }'],
    providers: [ LoggerService ]
  })
  export class CounterParentComponent {
        value: number;
        spyLog: string[] = [];

        constructor(private logger: LoggerService) {
          this.spyLog = logger.logs;
          this.reset();
        }

        updateCounter() {
          this.value += 1;
          this.logger.tick();
        }

        reset() {
          this.logger.log('-- reset --');
          this.value = 0;
          this.logger.tick();
        }

  }
  `
};

inputBinding = {
  name: 'Input Binding',
  code: `
  import { Component, Input } from '@angular/core';

  import { Hero } from '../hero';

  @Component({
    selector: 'app-hero-child',
    template: \`
          <h3>{{ hero.name }} says:</h3>
          <p>I, {{ hero.name }}, honor you, {{ master }}.</p>
    \`
  })
  export class HeroChildComponent {
      @Input() hero: Hero;
      @Input() master: string;

  }

  /******************************************************/

  import { Component } from '@angular/core';
  import { HEROES } from './../hero';

  @Component({
    selector: 'app-hero-parent',
    template: \`
      <h2>{{ master }} honors {{ heroes.length }} heroes</h2>
      <app-hero-child *ngFor="let hero of heroes"
        [hero]="hero"
        [master]="master">
      </app-hero-child>
    \`,
  })
  export class HeroParentComponent  {
    heroes = HEROES;
    master = 'Open Source';

  }


  export class Hero {
    name: string;
  }

  export const HEROES = [
    { name: 'Angular CLI' },
    { name: 'Angular' },
    { name: 'Angular Material' }
  ];

  `
};

inputWithSetterBinding = {
  name: 'Input With Setter Binding',
  code: `
  import { Component, Input } from '@angular/core';

  @Component({
    selector: 'app-name-child',
    template: '<h3>"{{ name }}"</h3>',
  })
  export class NameChildComponent {
    private _name = '';

    @Input()
    set name(name: string) {
      this._name = (name && name.trim()) || '<no name set>';
    }

    get name(): string {
      return this._name;
    }

  }

  /******************************************************/

  import { Component } from '@angular/core';

  @Component({
  selector: 'app-name-parent',
  template: \`
          <h2>Master controls {{ names.length }} names</h2>
          <app-name-child *ngFor="let name of names" [name]="name">
          </app-name-child>
    \`,
  })
  export class NameParentComponent  {
      // displays "Dr. IQ", "<no name set>", "Bombasto"
      names = ['Dr. IQ', ' ', '  Bombasto   '];

}
  `
};

inputInterceptionWithNgOnChanges = {
  name: 'Input Interception With NgOnChanges',
  code: `
  import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

  @Component({
    selector: 'app-version-child',
    template: \`
            <h3>Version {{ major }}. {{ minor }}. {{ patch }}</h3>
            <h4>Change log:</h4>
            <ul>
                  <li *ngFor="let change of changeLog">
                      {{ change }}
                  </li>
            </ul>
    \`
  })
  export class VersionChildComponent implements OnChanges {
    @Input() major: number;
    @Input() minor: number;
    @Input() patch: number;

    changeLog: string[] = [];

    ngOnChanges(changes: {[propertyKey: string]: SimpleChange}) {
        const log: string[] = [];

        for (const propertyName of Object.keys(changes)) {
          const changedProperty = changes[propertyName];
          const to = JSON.stringify(changedProperty.currentValue);
          if (changedProperty.isFirstChange()) {
            log.push(\`Initial value of \${propertyName} set to \${to}\`);
          } else {
            const from = JSON.stringify(changedProperty.previousValue);
            log.push(\`\${propertyName} changed from \${from} to \${to}\`);
          }
        }
        this.changeLog.push(log.join(', '));
    }

  }

  /******************************************************/

  import { Component } from '@angular/core';

  @Component({
  selector: 'app-version-parent',
  template: \`
            <h2>Source Code Version</h2>
            <button (click)="newMajor()">New Major Version</button>
            <button (click)="newMinor()">New Minor Version</button>
            <button (click)="newPatch()">New Patch Version</button>
            <app-version-child [major]="major" [minor]="minor" [patch]="patch">
            </app-version-child>
    \`,
  })
  export class VersionParentComponent {
    major = 5;
    minor = 2;
    patch = 3;

    newPatch() {
      this.patch++;
    }

    newMinor() {
      this.minor++;
      this.patch = 0;
    }

    newMajor() {
      this.major++;
      this.minor = 0;
      this.patch = 0;
    }

  }

  `
};

parentListensForChildEvents = {
  name: 'Parent Listens For Child Events',
  code: `
  import { Component, Input, Output, EventEmitter } from '@angular/core';

  @Component({
    selector: 'app-voter',
    template: \`
            <h4>{{ name }}</h4>
            <button (click)="vote(true)" [disabled]="voted">Agree</button>
            <button (click)="vote(false)" [disabled]="voted">Disagree</button>
    \`,
  })
  export class VoterComponent {
    @Input() name: string;
    @Output() onVoted = new EventEmitter<boolean>();

    voted = false;

    vote(agreed: boolean) {
      this.onVoted.emit(agreed);
      this.voted = true;
    }

  }

  /******************************************************/

  import { Component } from '@angular/core';

  @Component({
  selector: 'app-vote-taker',
  template: \`
            <h2>Should mankind colonize the Universe?</h2>
            <h3>Agree: {{ agreed }}, Disagree: {{ disagreed }}</h3>
            <app-voter *ngFor="let voter of voters"
                        [name]="voter"
                        (onVoted)="onVoted($event)">
            </app-voter>
    \`,
  })
  export class VoteTakerComponent {
      agreed = 0;
      disagreed = 0;
      voters = ['Flash', 'Wonderwoman', 'Superman'];

      onVoted(agreed: boolean) {
        agreed ? this.agreed++ : this.disagreed++;
      }

  }
  `
};

parentInteractsWitChildViaLocalVariable = {
  name: 'Parent Interacts With Child Via Local Variable',
  code: `
  import { Component, OnInit, OnDestroy } from '@angular/core';

  @Component({
    selector: 'app-countdown-timer',
    template: \`
          <p>{{ message }}</p>
    \`,
  })
  export class CountdownTimerComponent implements OnInit, OnDestroy {

    intervalId = 0;
    message = '';
    seconds = 11;

    ngOnInit() {
      this.start();
    }

    ngOnDestroy() {
      this.clearTimer();
    }

    clearTimer() {
      clearInterval(this.intervalId);
    }

    start() {
      this.countDown();
    }

    stop() {
      this.clearTimer();
      this.message = \`Holding at T-\${this.seconds} seconds\`;
    }

    private countDown() {
      this.clearTimer();
      this.intervalId = window.setInterval(() => {
        this.seconds -= 1;
        if (this.seconds === 0) {
          this.message = 'Blast Off!';
        } else {
          if (this.seconds < 0) {
            this.seconds = 10;
          }
          this.message = \`T-\${this.seconds} seconds and counting ...\`;
        }
      }, 1000);
    }

  }

  /******************************************************/

  import { Component } from '@angular/core';


  @Component({
  selector: 'app-countdown-parent-lv',
  template: \`
        <h3>Countdown to Liftoff (via local variable)</h3>
        <button (click)="timer.start()">Start</button>
        <button (click)="timer.stop()">Stop</button>
        <div class="seconds">{{ timer.seconds }}</div>
        <app-countdown-timer #timer></app-countdown-timer>
  \`,
  styleUrls: ['../../assets/demo.css']
  })
  export class CountdownLocalVarParentComponent { }


  `
};

parentCallsAtViewChild = {
  name: 'Parent Calls An @ViewChild',
  code: `
  import { Component } from '@angular/core';
  import { AfterViewInit, ViewChild } from '@angular/core';

  import { CountdownTimerComponent } from './../countdown-timer/countdown-timer.component';

  @Component({
    selector: 'app-countdown-parent-vc',
    template: \`
      <h3>Countdown to Liftoff (via ViewChild)</h3>
      <button (click)="start()">Start</button>
      <button (click)="stop()">Stop</button>
      <div class="seconds">{{ seconds() }}</div>
      <app-countdown-timer></app-countdown-timer>
      \`
    ,
    styleUrls: ['../../assets/demo.css']
  })
  export class CountdownViewChildParentComponent implements AfterViewInit {
    @ViewChild(CountdownTimerComponent)
               private timerComponent: CountdownTimerComponent;

    seconds() {
      return 0;
    }

    ngAfterViewInit() {
      setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
    }

    start() {
      this.timerComponent.start();
    }

    stop() {
      this.timerComponent.stop();
    }

  }


  `
};

parentChildrenCommunicateViaService = {
  name: 'Parent And Children Communicate Via A Shared Service',
  code: `
  import { Injectable } from '@angular/core';

  import { Subject } from 'rxjs/Subject';

  @Injectable()
  export class MissionService {

    // observable string sources
    private missionAnnouncedSource = new Subject<string>();
    private missionConfirmedSource = new Subject<string>();

    // observable string streams
    missionAnnounced$ = this.missionAnnouncedSource.asObservable();
    missionConfirmed$ = this.missionConfirmedSource.asObservable();

    // service message commands
    announceMission(mission: string) {
      this.missionAnnouncedSource.next(mission);
    }

    confirmMission(technology: string) {
      this.missionConfirmedSource.next(technology);
    }

  }


  import { Component } from '@angular/core';

  import { MissionService } from '../mission.service';

  @Component({
    selector: 'app-mission-control',
    template: \`
              <h2>Mission Control</h2>
              <button (click)="announce()">Announce Mission</button>
              <app-technology *ngFor="let technology of technologies"
                              [technology]="technology">
              </app-technology>
              <h3>History</h3>
              <ul>
                  <li *ngFor="let event of history">{{ event }}</li>
              </ul>
    \`,
    providers: [MissionService]
  })
  export class MissionControlComponent {
    technologies = ['Angular CLI',
                    'Angular',
                    'Angular Material',
                    'Firebase',
                    'Google Cloud Platform'];
    history: string[] = [];

    missions = ['Reach N° 1 position in our domains!',
                'Build new Features, Fix all Bugs!',
                'Have Fun, Build awesome Technologies, Grow our Communities!'];
    nextMission = 0;

    constructor(private missionService: MissionService) {
                missionService.missionConfirmed$.subscribe(
                  technology => {
                      this.history.push(\`\${technology} confirmed the mission.\`);
                  });
    }

    announce() {
      const mission = this.missions[this.nextMission++];
      this.missionService.announceMission(mission);
      this.history.push(\`Mission "\${mission}" announced.\`);
      if (this.nextMission >= this.missions.length) {
        this.nextMission = 0;
      }
    }

  }


  /******************************************************/

  import { MissionService } from './../mission.service';
  import { Component, Input, OnDestroy } from '@angular/core';

  import { Subscription } from 'rxjs/Subscription';

  @Component({
  selector: 'app-technology',
  template: \`
            <p>
                {{ technology }}: <strong>{{ mission }}</strong>
                <button (click)="confirm()"
                        [disabled]="!announced || confirmed">
                Confirm
                </button>
            </p>
  \`,
  })
  export class TechnologyComponent implements OnDestroy {
       @Input() technology: string;
        mission = '<no mission announced>';
        confirmed = false;
        announced = false;
        missionSubscription: Subscription;

  constructor(private missionService: MissionService) {
    this.missionSubscription = missionService.missionAnnounced$.subscribe(
      mission => {
          this.mission = mission;
          this.announced = true;
          this.confirmed = false;
      });
  }

  confirm() {
    this.confirmed = true;
    this.missionService.confirmMission(this.technology);
  }

  ngOnDestroy() {
    this.missionSubscription.unsubscribe();
    }

  }

  `
};

siblingComponentInteraction = {
  name: 'Sibling Component Communication',
  code: `
  import { Injectable } from '@angular/core';

  import { Subject } from 'rxjs/Subject';

  @Injectable()
  export class TodoService {

    // observable string sources
    private totalCount = new Subject<number>();
    private lastUpdate = new Subject<number>();
    private clearAll = new Subject<boolean>();


    // observable string streams
    totalCount$ = this.totalCount.asObservable();
    lastUpdate$ = this.lastUpdate.asObservable();
    clearAll$ = this.clearAll.asObservable();


    // service message commands
    publishTotalCount(count: number) {
      this.totalCount.next(count);
    }

    publishLastUpdate(date: number) {
      this.lastUpdate.next(date);
    }

    publishClearAll(clear: boolean) {
      this.clearAll.next(clear);
    }

  }

  /******************************************************/

  import { TodoService } from './../todo.service';
  import { Component, OnDestroy } from '@angular/core';

  import { Subscription } from 'rxjs/Subscription';

  class Todo {
    constructor(public title: string,
                public isCompleted: boolean,
                public date: number) { }
  }

  @Component({
    selector: 'app-todo',
    template: \`
            <h2>Todo List</h2>
            <h3>What needs to be done?</h3>
            <input #todoBox>
            <button (click)="add(todoBox)">Add</button>
            <ul>
                  <li *ngFor="let todo of todos">{{ todo.title }}
                    <button (click)="remove(todo)">x</button>
                  </li>
            </ul>
    \`,
  })
  export class TodoComponent implements OnDestroy {
    todos: Todo[] = [];
    totalTodos = 0;
    lastUpdate = 0;

    clearAllSubscription: Subscription;

    private updateCountDate(change: boolean): void {
      change ? this.totalTodos += 1 : this.totalTodos -= 1;
      this.todoService.publishTotalCount(this.totalTodos);
      this.todoService.publishLastUpdate(new Date().getTime());
    }

    constructor(private todoService: TodoService) {
      this.clearAllSubscription = this.todoService.clearAll$.subscribe(
        clear => {
          if (clear) {
            this.todos.length = 0;
            this.totalTodos = 0;
          }
        });
     }

     add(todo): void {
       if (!todo.value) {
         return;
       }
       this.todos.push(new Todo(todo.value, false, new Date().getTime()));
       this.updateCountDate(true);
       todo.value = '';
     }

     remove(todo): void {
       this.todos.splice(this.todos.indexOf(todo), 1);
       this.updateCountDate(false);
     }

    ngOnDestroy() {
      this.clearAllSubscription.unsubscribe();
    }

  }

  /******************************************************/

  import { Component, OnDestroy } from '@angular/core';

  import { TodoService } from './../todo.service';

  import { Subscription } from 'rxjs/Subscription';

  @Component({
    selector: 'app-dashboard',
    template: \`
          <h2>Dashboard</h2>
          <p><strong>Last Update: </strong>{{ lastUpdate | date:'medium' }}</p>
          <p><strong>Total Todos: </strong> {{ totalCount }}</p>
          <button (click)="clearAll()">Clear All</button>
    \`,
    styleUrls: ['./dashboard.component.css']
  })
  export class DashboardComponent implements OnDestroy {
    lastUpdate = null;
    totalCount = 0;

    totalCountSubscription: Subscription;
    lastUpdateSubscription: Subscription;

    constructor(private todoService: TodoService) {
      this.totalCountSubscription = this.todoService.totalCount$.subscribe(
        count => {
          this.totalCount = count;
        });
        this.lastUpdateSubscription = this.todoService.lastUpdate$.subscribe(
          lastUpdate => {
            this.lastUpdate = lastUpdate;
          });
    }

    clearAll() {
      this.lastUpdate = null;
      this.totalCount = 0;
      this.todoService.publishClearAll(true);
    }

    ngOnDestroy() {
      this.totalCountSubscription.unsubscribe();
      this.lastUpdateSubscription.unsubscribe();
    }

  }


  `
};

componentStylesInComponentMetadata = {
  name: 'Component Styles In Component Metadata',
  code: `
  import { Component, HostBinding } from '@angular/core';

  import { Hero } from '../hero';

  @Component({
    selector: 'app-hero-app',
    template: \`
          <h1>Tour of Heroes</h1>
          <app-hero-app-main [hero]="hero"></app-hero-app-main>
    \`,
    styles: ['h1 { font-weight: normal; }']
  })
  export class HeroAppComponent {
    hero = new Hero(
      'Flash',
      ['Polymer Princess', 'Superman', 'Spiderman']
    );

    @HostBinding('class') get themeClass() {
      return 'theme-light';
    }

  }

  `
};

hostSelector = {
  name: 'Host Selector',
  code: `
  :host {
    display: block;
    border: 1px solid black;
  }

  :host(.active) {
    border-width: 3px;
  }

  :host-context(.theme-light) h2 {
    background-color: #eef;
  }

  :host /deep/ h3 {
    font-style: italic;
  }

  `
};

cssInline = {
  name: 'CSS Inline Revisited',
  code: `
  import { Component, HostBinding } from '@angular/core';

  import { Hero } from '../hero';

  @Component({
    selector: 'app-hero-app',
    template: \`
          <h1>Tour of Heroes</h1>
          <app-hero-app-main [hero]="hero"></app-hero-app-main>
    \`,
    styles: ['h1 { font-weight: normal; }']
  })
  export class HeroAppComponent {
    hero = new Hero(
      'Flash',
      ['Polymer Princess', 'Superman', 'Spiderman']
    );

    @HostBinding('class') get themeClass() {
      return 'theme-light';
    }

  }

  `
};

cssExternalFile = {
  name: 'CSS (SCSS, LESS, Stylus) External File',
  code: `
  import { Component, HostBinding } from '@angular/core';

  import { Hero } from '../hero';


  @Component({
    selector: 'app-hero-app',
    template: \`
          <h1>Tour of Heroes</h1>
          <app-hero-app-main [hero]="hero"></app-hero-app-main>
    \`,
    styles: ['./hero-app.component.css']
  })
  export class HeroAppComponent {
    hero = new Hero(
      'Flash',
      ['Polymer Princess', 'Superman', 'Spiderman']
    );

    @HostBinding('class') get themeClass() {
      return 'theme-light';
    }

  }


  h1 {
    font-weight: normal;
  }

  `
};

templateInlineStyles = {
  name: 'Template Inline Styles',
  code: `
  import { Component, Input } from '@angular/core';

  import { Hero } from '../hero';

  @Component({
    selector: 'app-hero-controls',
    template: \`
        <style>
            button {
              background-color: white;
              border: 1px solid #777;
            }
        </style>
        <h3>Controls</h3>
        <button (click)="activate()">Activate</button>
    \`,
  })
  export class HeroControlsComponent {
    @Input() hero: Hero;

    activate() {
      this.hero.active = true;
    }

  }

  `
};

templateLinkTags = {
  name: 'Template Link Tags',
  code: `
  import { Component, Input } from '@angular/core';

  import { Hero } from '../hero';

  @Component({
    selector: 'app-hero-team',
    template: \`
          <!-- we must use a relative URL so that the AOT compiler can find the stylesheet -->
          <link rel="../../assets/hero-team.component.css">
          <h3>Team</h3>
          <ul>
            <li *ngFor="let member of hero.team">
                {{ member }}
            </li>
          </ul>
    \`,
  })
  export class HeroTeamComponent {
    @Input() hero: Hero;

  }

  `
};

cssAImports = {
  name: 'CSS @imports',
  code: `
  /* the AOT compiler needs the ./ to show that this is local */
  /* @import './hero-detail.box.css'; */

  `
};

viewEncapsulation = {
  name: 'View Encapsulation',
  code: `
  import { Component, ViewEncapsulation } from '@angular/core';

  @Component({
    selector: 'app-quest-summary',
    templateUrl: './quest-summary.component.html',
    styleUrls: ['./quest-summary.component.css'],
    encapsulation: ViewEncapsulation.Native
  })
  export class QuestSummaryComponent {
    // careful: few browsers support shadow DOM encapsulation at this time

  }

  <p>
        Carmen, it's all about you ... my baby ...
  </p>

  `
};

anchorDirective = {
  name: 'Anchor Directive',
  code: `
  import { Directive, ViewContainerRef } from '@angular/core';

  @Directive({
    selector: '[appAdHost]'
  })
  export class AdDirective {

    constructor(public viewContainerRef: ViewContainerRef) { }

  }


  `
};

loadingComponents = {
  name: 'Loading Components',
  code: `
  import { Component,
    Input,
    AfterViewInit,
    ViewChild,
    ChangeDetectorRef,
    ComponentFactoryResolver,
    OnDestroy } from '@angular/core';

  import { AdDirective } from '../ad.directive';
  import { AdComponent } from '../ad.component';
  import { AdItem } from '../ad-item';

  @Component({
    selector: 'app-ad-banner',
    template: \`
       <div class="ad-banner">
             <h3>Advertisements</h3>
             <ng-template appAdHost></ng-template>
       </div>
\`
  })
  export class AdBannerComponent implements AfterViewInit, OnDestroy  {
      @Input() ads: AdItem[];
      currentAddIndex: number = -1;
      @ViewChild(AdDirective) adHost: AdDirective;
      subscription: any;
      interval: any;

      constructor(private componentFactoryResolver: ComponentFactoryResolver,
      private cdr: ChangeDetectorRef) { }

      ngAfterViewInit() {
        this.loadComponent();
        this.getAds();
        this.cdr.detectChanges();
      }

    loadComponent() {
    this.currentAddIndex = (this.currentAddIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAddIndex];

    const componentFactory =
              this.componentFactoryResolver.resolveComponentFactory(adItem.component);
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;

    }

    getAds() {
        this.interval = setInterval(() => {
        this.loadComponent();
    }, 3000);
  }

    ngOnDestroy() {
      clearInterval(this.interval);
    }
  }

  `
};

selectorReferences = {
  name: 'Selector References',
  code: `
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';

  import { AdDirective } from './ad.directive';
  import { AdBannerComponent } from './ad-banner/ad-banner.component';
  import { TechnologyAdComponent } from './technology-ad/technology-ad.component';
  import { TechnologyProfileComponent }
         from './technology-profile/technology-profile.component';

  import { AdService } from './ad.service';

  @NgModule({
    imports: [
      CommonModule
    ],
    declarations: [AdDirective,
                  AdBannerComponent,
                  TechnologyAdComponent,
                  TechnologyProfileComponent],
    providers: [ AdService ],
    entryComponents: [ TechnologyAdComponent, TechnologyProfileComponent ],
    exports: [ AdBannerComponent ]
  })
  export class DynamicComponentModule { }
  `
};

adComponentInterface = {
  name: 'Ad Component Interface and Implementing Components',
  code: `
  export interface AdComponent {
    data: any;
  }

  /******************************************************/

  import { Type } from '@angular/core';

  export class AdItem {
    constructor(public component: Type<any>, public data: any) { }

  }

  /******************************************************/

  import { Component, Input } from '@angular/core';

  import { AdComponent } from './../ad.component';

  @Component({
      selector: 'app-technology-ad',
      template: \`
          <div class="technology-ad">
                <h4>{{ data.headline }}</h4>
                {{ data.body }}
          </div>
  \`,
  })
  export class TechnologyAdComponent implements AdComponent {
        @Input() data: any;

  }

  /******************************************************/

  import { Component, Input } from '@angular/core';

import { AdComponent } from '../ad.component';

@Component({
  selector: 'app-technology-profile',
  template: \`
        <div class="technology-profile">
            <h3>Featured Technology Profile</h3>
            <h4>{{ data.name }}</h4>

            <p>{{ data.feature }}</p>

            <strong>Build an awesome app with this technology today!</strong>
        </div>
    \`,
  })
  export class TechnologyProfileComponent implements AdComponent {
    @Input() data: any;
  }
  `
};

adService = {
  name: 'Ad Service',
  code: `
  import { Injectable } from '@angular/core';

  import { AdItem } from './ad-item';
  import { TechnologyProfileComponent }
  from './technology-profile/technology-profile.component';
  import { TechnologyAdComponent } from './technology-ad/technology-ad.component';

  @Injectable()
  export class AdService {

    getAds() {
      return [
            new AdItem(TechnologyProfileComponent,
              { name: 'Angular CLI', feature: 'Create your dream app'}),
            new AdItem(TechnologyProfileComponent,
              { name: 'Angular', feature: 'One Platform. Mobile && desktop'}),
            new AdItem(TechnologyProfileComponent,
              { name: 'Angular Material', feature: 'Material Design CSS Framework'}),
            new AdItem(TechnologyAdComponent,
              { headline: 'Angular 5.2.3 released', body: 'Get the newest version now!'}),
            new AdItem(TechnologyAdComponent,
              { headline: 'Angular CLI 1.6.7 available', body: 'Try this command line tool.'})
      ];
    }
  }
  `
};

attributeDirective = {
  name: 'Attribute Directive',
  code: `
  import { Directive, ElementRef, HostListener, Input } from '@angular/core';

  @Directive({
    selector: '[appHighlight]'
  })
  export class HighlightDirective {
    @Input() defaultColor: string;
    @Input() appHighlight: string;

    constructor(private el: ElementRef) { }

    @HostListener('mouseenter') onmouseenter() {
      this.highlight(this.appHighlight || this.defaultColor || 'red');
    }

    @HostListener('mouseleave') onmouseleave() {
      this.highlight(null);
    }

    private highlight(color: string) {
      this.el.nativeElement.style.backgroundColor = color;
    }

  }


  `
};

hostComponent = {
  name: 'Host Component',
  code: `
  import { Component } from '@angular/core';


  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
   color: string;

  }

  /******************************************************/

  <h1>My first Attribute Directive</h1>

    <h4>Pick a highlight color</h4>
  <div>
    <input type="radio" name="colors" (click)="color='lightgreen'">Green
    <input type="radio" name="colors" (click)="color='yellow'">Yellow
    <input type="radio" name="colors" (click)="color='cyan'">Cyan
  </div>
  <p [appHighlight]="color">Highlight me!</p>
  <p [appHighlight]="color" defaultColor="violet">
    Highlight me too!
  </p>
  <hr>
  <p><i>Mouse over following lines to see fixed highlights</i></p>

  <p [appHighlight]="'yellow'">Highlighted in yellow</p>
  <p appHighlight="red">Highlighted in red</p>

  `
};

birthdayPipe = {
  name: 'Birthday Pipe',
  code: `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-hero-birthday1',
    template: \`
              <p>The hero's birthday is {{ birthday | date }}</p>
              <p>The hero's birthday is {{ birthday | date:"dd/MM/yy" }}</p>
    \`
  })
  export class HeroBirthday1Component {

    birthday = new Date(1971, 6, 13);

  }

  `
};

parameterizePipe = {
  name: 'Parameterizing A Pipe',
  code: `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-hero-birthday2',
    template: \`
          <p>The hero's birthday is {{ birthday | date:format }}</p>
          <button (click)="toggleFormat()">Toggle Format</button>
    \`,
  })
  export class HeroBirthday2Component {
        birthday = new Date(1971, 6, 13);
        toggle = true;

        get format() { return this.toggle ? 'shortDate' : 'fullDate'; }

        toggleFormat() {
          this.toggle = !this.toggle;
        }

  }

  `
};

chainingPipes = {
  name: 'Chaining Pipes',
  code: `
  <app-hero-birthday1></app-hero-birthday1>

  <hr>

  <app-hero-birthday2></app-hero-birthday2>

  <hr>

  <p>
      The chained hero's birthday is
      {{ birthday | date | uppercase }}
  </p>
  <p>
    The chained hero's birthday is
    {{ birthday | date:'fullDate' | uppercase }}
  </p>
  <p>
    The chained hero's birthday is
    {{ ( birthday | date:'fullDate' ) | uppercase }}
  </p>

  <hr>

  <app-power-booster></app-power-booster>

  <hr>

  <app-power-boost-calculator></app-power-boost-calculator>

  <hr>

  <app-flying-heroes></app-flying-heroes>

  <hr>

  <app-flying-heroes-impure></app-flying-heroes-impure>

  <hr>

  <app-hero-async-message></app-hero-async-message>

  <hr>

  <app-hero-list></app-hero-list>


  `
};

customPipe = {
  name: 'Custom Pipe',
  code: `
  import { Pipe, PipeTransform } from '@angular/core';

  @Pipe({
    name: 'exponentialStrength'
  })
  export class ExponentialStrengthPipe implements PipeTransform {

    transform(value: number, exponent: string): number {
      const exp = parseFloat(exponent);
      return Math.pow(value, isNaN(exp) ? 1 : exp);
    }

  }

  `
};

powerBooster = {
  name: 'Power Booster',
  code: `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-power-booster',
    template: \`
            <h2>Power Booster</h2>
            <p>Super power boost: {{ 2 | exponentialStrength: 10 }}</p>
    \`
  })
  export class PowerBoosterComponent { }

  `
};

powerBoostCalculator = {
  name: 'Power Boost Calculator',
  code: `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-power-boost-calculator',
    template: \`
        <h2>Power Boost Calculator</h2>
        <div>Normal power: <input [(ngModel)]="power"></div>
        <div>Boost factor: <input [(ngModel)]="factor"></div>
        <p>
            Super Hero Power: {{power | exponentialStrength: factor }}
        </p>
    \`,
  })
  export class PowerBoostCalculatorComponent {
        power = 2;
        factor = 8;
  }

  `
};

flyingHeroesPipe = {
  name: 'Impure And Pure Pipes',
  code: `
  import { Pipe, PipeTransform } from '@angular/core';

  import { Flyer } from './heroes';

  @Pipe({
    name: 'flyingHeroes'
  })
  export class FlyingHeroesPipe implements PipeTransform {

    transform(allHeroes: Flyer[]): Flyer[] {
      return allHeroes.filter(hero => hero.canFly);
    }

  }

  @Pipe({
    name: 'flyingHeroesImpure',
    pure: false
  })
  export class FlyingHeroesImpurePipe extends FlyingHeroesPipe { }


  /******************************************************/

  export interface Flyer { canFly: boolean; }

  export const HEROES = [
    { name: 'Flash', canFly: true },
    { name: 'Wonderwoman', canFly: true },
    { name: 'Bombasto', canFly: false },
    { name: 'Spiderman', canFly: false }
  ];


  `
};

componentPipes = {
  name: 'Component Pipes',
  code: `
  import { Component } from '@angular/core';

  import { HEROES } from '../heroes';

  @Component({
    selector: 'app-flying-heroes',
    template: \`
      <h2>{{ title }}</h2>
      <p>
        New hero:
            <input type="text" #box
            (keyup.enter)="addHero(box.value); box.value='';"
            placeholder="hero name">
        <input id="can-fly" type="checkbox" [(ngModel)]="canFly"> can fly
      </p>

      <p>
      <input id="mutate" type="checkbox" [(ngModel)]="mutate"> Mutate array
      <button (click)="reset()">Reset</button>
      </p>

      <h4>Heroes who fly (piped)</h4>
      <div id="flyer">
        <div *ngFor="let hero of heroes | flyingHeroes">
            {{ hero.name }}
        </div>
      </div>

      <h4>All Heroes (no pipe)</h4>
      <div id="all">
          <div *ngFor="let hero of heroes">
                {{ hero.name }}
          </div>
      </div>
    \`,
    styles: ['#flyers, #all { font-style: italic; }']
  })
  export class FlyingHeroesComponent {
    title = 'Flying Heroes (pure pipe)';
    heroes: any[] = [];
    canFly = true;
    mutate = true;

    constructor() {
      this.reset();
    }

    addHero(name: string) {
      name = name.trim();
      if (!name) {
        return;
      }
      const hero = { name, canFly: this.canFly };
      if (this.mutate) {
        // pure pipe won't update because heroes array reference is unchanged
        // impure pipe will
        this.heroes.push(hero);
      } else {
        // pipe updates because heroes array is a new object
        this.heroes = this.heroes.concat(hero);
      }
    }

    reset() {
      this.heroes = HEROES.slice();
    }

  }

  /////////// Identical except for impure pipe /////////////
  @Component({
    selector: 'app-flying-heroes-impure',
    template: \`
    <h2>{{ title }}</h2>
    <p>
      New hero:
          <input type="text" #box
          (keyup.enter)="addHero(box.value); box.value='';"
          placeholder="hero name">
      <input id="can-fly" type="checkbox" [(ngModel)]="canFly"> can fly
    </p>

    <p>
    <input id="mutate" type="checkbox" [(ngModel)]="mutate"> Mutate array
    <button (click)="reset()">Reset</button>
    </p>

    <h4>Heroes who fly (piped)</h4>
    <div id="flyer">
      <div *ngFor="let hero of heroes | flyingHeroesImpure">
          {{ hero.name }}
      </div>
    </div>

    <h4>All Heroes (no pipe)</h4>
    <div id="all">
        <div *ngFor="let hero of heroes">
              {{ hero.name }}
        </div>
    </div>
  \`,
  styles: ['#flyers, #all { font-style: italic; }']
  })
  export class FlyingHeroesImpureComponent extends FlyingHeroesComponent {
    title = 'Flying Heroes (impure pipe)';
  }


  `
};

impureAsyncPipe = {
  name: 'Impure Async Pipe',
  code: `
  import { Component } from '@angular/core';

  import { Observable } from 'rxjs/Observable';
  import 'rxjs/add/observable/interval';
  import 'rxjs/add/operator/map';
  import 'rxjs/add/operator/take';

  @Component({
    selector: 'app-hero-async-message',
    template: \`
          <h2>Async Hero Message and AsyncPipe</h2>
          <p>Message: {{ message$ | async }}</p>
          <button (click)="resend()">Resend</button>
    \`
  })
  export class HeroAsyncMessageComponent {
         message$: Observable<string>;

         private messages = [
            'You are my hero!',
            'You are the best hero!',
            'Will you be my hero?',
            'I will save you, my polymer princess.'
         ];

         constructor() {
           this.resend();
         }

         resend() {
           this.message$ = Observable.interval(1000)
                           .map(i => this.messages[i])
                           .take(this.messages.length);
         }

  }

  `
};

impureCachingPipe = {
  name: 'Impure Caching Pipe',
  code: `
  import { Pipe, PipeTransform } from '@angular/core';
  import { HttpClient } from '@angular/common/http';

  @Pipe({
    name: 'fetch',
    pure: false
  })
  export class FetchJsonPipe implements PipeTransform {
    private cachedData: any = null;
    private cachedUrl = '';

    constructor(private http: HttpClient) {}

    transform(url: string): any {
      if (url !== this.cachedUrl) {
        this.cachedData = null;
        this.cachedUrl = url;
        this.http.get<any>(url).subscribe(result => this.cachedData = result);
      }
      return this.cachedData;
    }

  }


  `
};

heroListComponent = {
  name: 'Hero List Component',
  code: `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-hero-list',
    template: \`
          <h2>Heroes from JSON File</h2>
          <div *ngFor="let hero of ('assets/heroes.json' | fetch)">
                {{ hero.name }}
          </div>

          <p>Heroes as JSON:
              {{ 'assets/heroes.json' | fetch | json }}
          </p>

    \`,
  })
  export class HeroListComponent { }

  /******************************************************/

  [
    {"name": "Igor", "canFly": true},
    {"name": "Misko", "canFly": false},
    {"name": "Hans", "canFly": true},
    {"name": "Stephen", "canFly": false},
    {"name": "Martin", "canFly": true},
    {"name": "Alex", "canFly": false},
    {"name": "Rob", "canFly": true},
    {"name": "Carmen", "canFly": false},
    {"name": "Nils", "canFly": true}
  ]

  `
};

technologyService = {
  name: 'Technology Service',
  code: `
  import { Injectable } from '@angular/core';

  export class Technology {

    constructor(public name: string, public state = 'inactive') { }

    toggleState() {
      this.state = this.state === 'active' ? 'inactive' : 'active';
    }

  }

  const ALL_TECHNOLOGIES = [
        'Angular CLI 1.7',
        'Angular 5',
        'Angular Material 5',
        'Bootstrap 4',
        'TypeScript 2.7',
        'JavaScript',
        'EcmaScript 2015',
        'EcmaScript 2016',
        'EcmaScript 2017',
        'Linux',
        'Firebase',
        'Google Cloud Platform'
  ].map(name => new Technology(name));

  @Injectable()
  export class TechnologyService {

    technologies: Technology[] = [];

    canAdd() {
      return this.technologies.length < ALL_TECHNOLOGIES.length;
    }

    canRemove() {
      return this.technologies.length > 0;
    }

    addActive(active = true) {
      const technology = ALL_TECHNOLOGIES[this.technologies.length];
      technology.state = active ? 'active' : 'inactive';
      this.technologies.push(technology);
    }

    addInactive() {
      this.addActive(false);
    }

    remove() {
      this.technologies.length -= 1;
    }


  }

  `
};

animationsModule = {
  name: 'Animations Module',
  code: `
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';

  import { TechnologyTeamComponent } from './technology-team/technology-team.component';
  import { TechnologyListBasicComponent }
  from './technology-list-basic/technology-list-basic.component';
  import { TechnologyListEnterLeaveComponent }
  from './technology-list-enter-leave/technology-list-enter-leave.component';
  import { TechnologyListEnterLeaveStatesComponent }
  from './technology-list-enter-leave-states/technology-list-enter-leave-states.component';
  import { TechnologyListAutoComponent }
  from './technology-list-auto/technology-list-auto.component';
  import { TechnologyListTimingsComponent }
  from './technology-list-timings/technology-list-timings.component';
  import { TechnologyListMultistepComponent }
  from './technology-list-multistep/technology-list-multistep.component';
  import { TechnologyListGroupsComponent }
  from './technology-list-groups/technology-list-groups.component';
  import { TechnologyListInlineStylesComponent }
  from './technology-list-inline-styles/technology-list-inline-styles.component';
  import { TechnologyListCombinedTransitionsComponent }
  from './technology-list-combined-transitions/technology-list-combined-transitions.component';
  import { TechnologyListTwowayComponent }
  from './technology-list-twoway/technology-list-twoway.component';

  @NgModule({
    imports: [
      CommonModule
    ],
    declarations: [TechnologyTeamComponent,
                   TechnologyListBasicComponent,
                   TechnologyListEnterLeaveComponent,
                   TechnologyListEnterLeaveStatesComponent,
                   TechnologyListAutoComponent,
                   TechnologyListTimingsComponent,
                   TechnologyListMultistepComponent,
                   TechnologyListGroupsComponent,
                   TechnologyListInlineStylesComponent,
                   TechnologyListCombinedTransitionsComponent,
                   TechnologyListTwowayComponent],
    exports: [ TechnologyTeamComponent ]
  })
  export class AnimationsModule { }


  `
};

globalCSS = {
  name: 'Global CSS',
  code: `
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: block;
    width: 190px;
    line-height: 50px;
    padding: 0 10px;
    box-sizing: border-box;
    background-color: #f8bbd0;
    color: #fff;
    border-radius: 5px;
    margin: 10px;
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
  }

  .active {
    background-color: #ec407a;
    color: #fff;
    transform: scale(1.3);
  }

  .inactive {
    background-color: #f8bbd0;
    color: #fff;
    transform: scale(1);
  }

  `
};

technologyTeam = {
  name: 'Technology Team Component',
  code: `
  import { Component } from '@angular/core';

  import { TechnologyService, Technology } from '../technology.service';

  @Component({
    selector: 'app-technology-team',
    template: \`
                <div class="buttons">
                <button [disabled]="!technologyService.canAdd()"
                        (click)="technologyService.addInactive()">
                        Add inactive technology
                </button>
                <button [disabled]="!technologyService.canAdd()"
                        (click)="technologyService.addActive()">
                        Add active technology
                </button>
                <button [disabled]="!technologyService.canRemove()"
                        (click)="technologyService.remove()">
                        Remove technology
                </button>
                </div>
                <div class="columns">
                    <div class="column">
                        <h4>Basic State</h4>
                          <app-technology-list-basic [technologies]="technologies">
                          </app-technology-list-basic>
                    </div>
                    <div class="column">
                        <h4>Enter & Leave</h4>
                          <app-technology-list-enter-leave [technologies]="technologies">
                          </app-technology-list-enter-leave>
                    </div>
                    <div class="column">
                          <h4>Styles In Transitions</h4>
                          <app-technology-list-inline-styles [technologies]="technologies">
                          </app-technology-list-inline-styles>
                    </div>
            <div class="column">
                <h4>Combined Transitions</h4>
                  <app-technology-list-combined-transitions [technologies]="technologies">
                  </app-technology-list-combined-transitions>
            </div>
                    <div class="column">
                         <h4>Two-Way Transitions</h4>
                          <app-technology-list-twoway [technologies]="technologies">
                          </app-technology-list-twoway>
                   </div>
                </div>
          <div class="columns">
              <div class="column">
                  <h4>Enter & Leave & States</h4>
                    <app-technology-list-enter-leave-states [technologies]="technologies">
                    </app-technology-list-enter-leave-states>
              </div>
                    <div class="column">
                        <h4>Auto Style Calc</h4>
                        <app-technology-list-auto [technologies]="technologies">
                        </app-technology-list-auto>
                    </div>
                    <div class="column">
                        <h4>Different Timings</h4>
                        <app-technology-list-timings [technologies]="technologies">
                        </app-technology-list-timings>
                    </div>
                    <div class="column">
                        <h4>Multiple Keyframes</h4>
                        <app-technology-list-multistep [technologies]="technologies">
                        </app-technology-list-multistep>
                    </div>
                    <div class="column">
                        <h4>Parallel Groups</h4>
                        <app-technology-list-groups [technologies]="technologies">
                        </app-technology-list-groups>
                    </div>
            </div>
    \`,
    styles: [\`
    .buttons {
      text-align: center;
    }
    button {
      padding: 1.5em 3em;
    }
    .columns {
      display: flex;
      flex-direction: row;
    }
    .column {
      flex: 1;
      padding: 10px;
    }
    .column p {
      min-height: 6em;
    }
    \`],
    providers: [ TechnologyService ]
  })
  export class TechnologyTeamComponent {
    technologies: Technology[];

    constructor(public technologyService: TechnologyService) {
      this.technologies = technologyService.technologies;
    }


  }

  `
};

basicState = {
  name: 'Basic State Component',
  code: `
  import { Component, Input } from '@angular/core';
  import { trigger, state, style, animate, transition } from '@angular/animations';

  import { Technology } from '../technology.service';

  @Component({
    selector: 'app-technology-list-basic',
    template: \`
            <ul>
                  <li *ngFor="let technology of technologies"
                        [@technologyState]="technology.state"
                        (click)="technology.toggleState()">
                        {{ technology.name }}
                  </li>
            </ul>
    \`,
    styleUrls: ['../technology-list.css'],
    animations: [
      trigger('technologyState', [
        state('inactive', style({
          backgroundColor: '#f8bbd0',
          color: '#fff',
          transform: 'scale(1)'
        })),
        state('active', style({
          backgroundColor: '#ec407a',
          color: '#fff',
          transform: 'scale(1.3)'
        })),
        transition('inactive => active', animate('1000ms ease-in')),
        transition('active => inactive', animate('1000ms ease-out'))
      ])
    ]
  })
  export class TechnologyListBasicComponent {

    @Input() technologies: Technology[];

  }

  `
};

enterLeave = {
  name: 'Enter Leave Component',
  code: `
  import { Component, Input } from '@angular/core';
  import { trigger, state, style, animate, transition } from '@angular/animations';

  import { Technology } from '../technology.service';

  @Component({
    selector: 'app-technology-list-enter-leave',
    template: \`
                <ul>
                      <li *ngFor="let technology of technologies"
                      [@flyInOut]="'in'">
                      {{ technology.name }}
                      </li>
                </ul>
    \`,
    styleUrls: ['../technology-list.css'],
    animations: [
      trigger('flyInOut', [
        state('in', style({transform: 'translateX(0)'})),
        transition('void => *', [
          style({transform: 'translateX(-100%)'}),
          animate(1000)
        ]),
        transition('* => void', [
          animate(1000, style({transform: 'translateX(100%)'}))
        ])
      ])
    ]
  })
  export class TechnologyListEnterLeaveComponent {
        @Input() technologies: Technology[];
  }


  `
};

stylesTransitions = {
  name: 'Styles Transitions Component',
  code: `
  import { Component, Input } from '@angular/core';
  import { trigger, style, animate, transition } from '@angular/animations';

  import { Technology } from '../technology.service';

  @Component({
    selector: 'app-technology-list-inline-styles',
    template: \`
              <ul>
                  <li *ngFor="let technology of technologies"
                       [@technologyState]="technology.state"
                       (click)="technology.toggleState()">
                  {{ technology.name }}
                  </li>
              </ul>
    \`,
    styleUrls: ['../technology-list.css'],
    animations: [
      trigger('technologyState', [
        transition('inactive => active', [
          style({
            backgroundColor: '#ffab91',
            transform: 'scale(1.3)'
          }),
          animate('3s ease-in', style({
            backgroundColor: '#ff3d00',
            transform: 'scale(1)'
          }))
        ])
      ])
    ]
  })
  export class TechnologyListInlineStylesComponent {
      @Input() technologies: Technology[];

  }


  `
};

combinedTransitions = {
  name: 'Combined Transitions Component',
  code: `
  import { Component, Input } from '@angular/core';
  import { trigger, style, state, animate, transition } from '@angular/animations';

  import { Technology } from '../technology.service';

  @Component({
    selector: 'app-technology-list-combined-transitions',
    template: \`
    <ul>
        <li *ngFor="let technology of technologies"
             [@technologyState]="technology.state"
             (click)="technology.toggleState()">
        {{ technology.name }}
        </li>
    </ul>
  \`,
    styleUrls: ['../technology-list.css'],
    animations: [
      trigger('technologyState', [
      state('inactive', style({
        backgroundColor: '#ffe082',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#ff6f00',
        transform: 'scale(1.5)'
      })),
      transition('inactive => active, active => inactive',
      animate('3s ease-out'))
      ])
    ]
  })
  export class TechnologyListCombinedTransitionsComponent {
    @Input() technologies: Technology[];


  }

  `
};

twoWayTransitions = {
  name: 'Two Way Transitions Component',
  code: `
  import { Component, Input } from '@angular/core';
  import { trigger, style, state, animate, transition } from '@angular/animations';

  import { Technology } from '../technology.service';

  @Component({
    selector: 'app-technology-list-twoway',
    template: \`
    <ul>
        <li *ngFor="let technology of technologies"
             [@technologyState]="technology.state"
             (click)="technology.toggleState()">
        {{ technology.name }}
        </li>
    </ul>
  \`,
    styleUrls: ['../technology-list.css'],
    animations: [
      trigger('technologyState', [
      state('inactive', style({
        backgroundColor: '#66bb6a',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#2e7d32',
        transform: 'scale(1.7)'
      })),
      transition('inactive <=> active',
      animate('2s ease-out'))
      ])
    ]
  })
  export class TechnologyListTwowayComponent {
    @Input() technologies: Technology[];

  }


  `
};

enterLeaveStates = {
  name: 'Enter Leave States Component',
  code: `
  import { Component, Input } from '@angular/core';
  import { trigger, state, style, animate, transition } from '@angular/animations';

  import { Technology } from './../technology.service';

  @Component({
    selector: 'app-technology-list-enter-leave-states',
    template: \`
            <ul>
                <li *ngFor="let technology of technologies"
                     (click)="technology.toggleState()"
                     [@technologyState]="technology.state">
                     {{ technology.name }}
                </li>
            </ul>
    \`,
    styleUrls: ['../technology-list.css'],
    animations: [
      trigger('technologyState', [
        state('inactive', style({transform: 'translateX(0) scale(1)'})),
        state('active', style({transform: 'translateX(0) scale(1.3)'})),
        transition('inactive => active', animate('1000ms ease-in')),
        transition('active => inactive', animate('1000ms ease-out')),
        transition('void => inactive', [
          style({transform: 'translateX(-100%) scale(1)'}),
          animate(1000)
        ]),
        transition('inactive => void', [
          style({transform: 'translateX(100%) scale(1)'}),
          animate(1000)
        ]),
        transition('void => inactive', [
          style({transform: 'translateX(0) scale(0)'}),
          animate(2000)
        ]),
        transition('active => void', [
          style({transform: 'translateX(0) scale(0)'}),
          animate(2000)
        ])
      ])
    ]
  })
  export class TechnologyListEnterLeaveStatesComponent {
    @Input() technologies: Technology[];

  }

  `
};

autoStyleCalc = {
  name: 'Auto Style Calc Component',
  code: `
  import { Component, Input } from '@angular/core';
  import { trigger, state, style, animate, transition } from '@angular/animations';

  import { Technology } from '../technology.service';

  @Component({
    selector: 'app-technology-list-auto',
    template: \`
          <ul>
              <li *ngFor="let technology of technologies"
                   [@shrinkOut]="'in'">
                    {{ technology.name }}
              </li>
          </ul>
    \`,
    styleUrls: ['../technology-list.css'],
    animations: [
      trigger('shrinkOut', [
        state('in', style({height: '*'})),
        transition('* => void', [
          style({ height: '*' }),
          animate(2500, style({ height: 0}))
        ])
      ])
    ]
  })
  export class TechnologyListAutoComponent {
      @Input() technologies: Technology[];

  }

  `
};

differentTimings = {
  name: 'Different Timings Component',
  code: `
  import { Component, Input } from '@angular/core';
  import { trigger, state, style, animate, transition } from '@angular/animations';

  import { Technology } from '../technology.service';

  @Component({
    selector: 'app-technology-list-timings',
    template: \`
                <ul>
                    <li *ngFor="let technology of technologies"
                          [@flyInOut]="'in'" (click)="technology.toggleState()">
                          {{ technology.name }}
                    </li>
                </ul>
    \`,
    styleUrls: ['../technology-list.css'],
    animations: [
      trigger('flyInOut', [
        state('in', style({ opacity: 1, transform: 'translateX(0)'})),
        transition('void => *', [
          style({
            opacity: 0,
            transform: 'translateX(-100%)'
          }),
          animate('0.9s ease-in')
        ]),
        transition('* => void', [
          animate('0.8s 0.6s ease-out', style({
            opacity: 0,
            transform: 'translateX(100%)'
          }))
        ])
      ])
    ]
  })
  export class TechnologyListTimingsComponent {
          @Input() technologies: Technology[];

  }

  `
};

multipleKeyframes = {
  name: 'Multiple Keyframes Component',
  code: `
  import { Component, Input } from '@angular/core';
  import { trigger,
           state,
           animate,
           style,
           transition,
           keyframes,
           AnimationEvent } from '@angular/animations';

  import { Technology } from '../technology.service';

  @Component({
    selector: 'app-technology-list-multistep',
    template: \`
            <ul>
                <li *ngFor="let technology of technologies"
                     (@flyInOut.start)="animationStarted($event)"
                     (@flyInOut.done)="animationDone($event)"
                     [@flyInOut]="'in'">
                {{ technology.name }}
                </li>
            </ul>
    \`,
    styleUrls: ['../technology-list.css'],
    animations: [
      trigger('flyInOut', [
        state('in', style({ transform: 'translateX(0)'})),
        transition('void => *', [
          animate(800, keyframes([
            style({ opacity: 0, transform: 'translateX(-100%)', offset: 0}),
            style({ opacity: 1, transform: 'translateX(15px)', offset: 0.3}),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1.0})
          ]))
        ]),
        transition('* => void', [
          animate(800, keyframes([
            style({ opacity: 1, transform: 'translateX(0)', offset: 0}),
            style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
            style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0})
          ]))
        ])
      ])
    ]
  })
  export class TechnologyListMultistepComponent {
    @Input() technologies: Technology[];

    animationStarted(event: AnimationEvent): void {
      console.warn('Animation started: ', event);
    }

    animationDone(event: AnimationEvent): void {
      console.warn('Animation done: ', event);
    }

  }


  `
};

parallelGroups = {
  name: 'Parallel Groups Component',
  code: `
  import { Component, Input } from '@angular/core';
  import { trigger,
           state,
           style,
           animate,
           transition,
           group } from '@angular/animations';

  import { Technology } from '../technology.service';

  @Component({
    selector: 'app-technology-list-groups',
    template: \`
              <ul>
                  <li *ngFor="let technology of technologies"
                       [@flyInOut]="'in'">
                  {{ technology.name }}
                  </li>
              </ul>
    \`,
    styles: [\`
      li {
        padding: 0 !important;
        text-align: center;
      }
    \`],
    styleUrls: ['../technology-list.css'],
    animations: [
      trigger('flyInOut', [
        state('in', style({ width: 190, transform: 'translateX(0)', opacity: 1 })),
        transition('void => *', [
          style({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
          group([
            animate('0.9s 0.7s ease', style({
              transform: 'translateX(0)',
              width: 190
            })),
            animate('0.9s ease', style({
              opacity: 1
            }))
          ])
        ]),
        transition('* => void', [
          group([
            animate('0.9s 0.7s ease', style({
              transform: 'translateX(50px)',
              width: 190
            })),
            animate('0.9s 0.6s ease', style({
              opacity: 0
            }))
          ])
        ])
      ])
    ]
  })
  export class TechnologyListGroupsComponent {
    @Input() technologies: Technology[];


  }

  `
};

userInputEvents = {
  name: 'Binding User Input Events',
  code: `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-click-me',
    template: \`
              <button (click)="onClickMe()">Click me!</button>
              {{ clickMessage }}
    \`,
    styleUrls: ['./click-me.component.css']
  })
  export class ClickMeComponent {
    clickMessage = '';

    onClickMe() {
      this.clickMessage = 'You are my hero!';
    }

  }

  /******************************************************/

  import { Component } from '@angular/core';

@Component({
  selector: 'app-click-me2',
  template: \`
      <button (click)="onClickMe2($event)">No! .. Click me!</button>
      {{ clickMessage }}
  \`,
})
export class ClickMe2Component {
    clickMessage = '';
    clicks = 1;

    onClickMe2(event: any) {
      const eventMessage = event ? 'Event target is ' + event.target.tagName : '';
      this.clickMessage = (\`Click #\${this.clicks++}. \${eventMessage}\`);
    }

}


  `
};

userInputEventObject = {
  name: 'User Input $Event Object',
  code: `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-key-up1',
    template: \`
            <input (keyup)="onKey($event)">
            <p>{{ values }}</p>
    \`
  })
  export class KeyUpComponent_v1 {
    values = '';

    // onKey(event: any) { // without type info
    //   this.values += event.target.value + ' | ';
    // }

    onKey(event: KeyboardEvent) { // with type info
          this.values += (<HTMLInputElement>event.target).value + ' | ';

    }

  }

  //////////////////////////////////////////////////////////////////////////

  @Component({
    selector: 'app-key-up2',
    template: \`
            <input #box (keyup)="onKey(box.value)">
            <p>{{ values }}</p>
    \`
  })
  export class KeyUpComponent_v2 {
    values = '';

    onKey(value: string) {
      this.values += value + ' | ';
    }

  }

  //////////////////////////////////////////////////////////////////////////

  @Component({
    selector: 'app-key-up3',
    template: \`
            <input #box (keyup.enter)="onEnter(box.value)">
            <p>{{ value }}</p>
    \`
  })
  export class KeyUpComponent_v3 {
    value = '';

    onEnter(value: string) {
      this.value = value;
    }

  }

  //////////////////////////////////////////////////////////////////////////

  @Component({
    selector: 'app-key-up4',
    template: \`
            <input #box (keyup.enter)="update(box.value)"
                        (blur)="update(box.value)">
            <p>{{ value }}</p>
    \`
  })
  export class KeyUpComponent_v4 {
    value = '';

    update(value: string) {
      this.value = value;
    }

  }

  `
};

userInputTemplateReferenceVar = {
  name: 'User Input Template Reference Variable',
  code: `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-loop-back',
    template: \`
        <input #box (keyup)="0">
        <p>{{ box.value }}
    \`
  })
  export class LoopBackComponent { }


  `
};

tourOfTechnologies = {
  name: 'Little Tour Technologies',
  code: `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-little-tour',
    template: \`
          <input #newTechnology
                (keyup.enter)="add(newTechnology.value)"
                (blur)="add(newTechnology.value); newTechnology.value = '';">
          <button (click)="add(newTechnology.value)">Add</button>
          <ul>
              <li *ngFor="let technology of technologies">
                    {{ technology }}
              </li>
          </ul>

    \`
  })
  export class LittleTourComponent {
      technologies = ['Angular CLI 1.7', 'Angular 5',
                      'Angular Material 5', 'JavaScript', 'Java'];

      add(newTechnology: string): void {
        if (newTechnology) {
        this.technologies.push(newTechnology);
        }
      }

  }


  `
};

heroFormComponent = {
  name: 'Hero Form Component',
  code: `
  import { Component } from '@angular/core';

  import { Hero } from '../hero';

  @Component({
    selector: 'app-hero-form',
    templateUrl: './hero-form.component.html',
    styleUrls: ['./hero-form.component.css']
  })
  export class HeroFormComponent {

    powers = ['Really Smart', 'Super Flexible',
              'Super Hot', 'Weather Changer'];

    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

    submitted = false;

    onSubmit() {
      this.submitted = true;
    }

    newHero() {
      this.model = new Hero(42, '', '');
    }

    // TODO: remove this when we are done
    get diagnostic() { return JSON.stringify(this.model); }


  }


  `
};

heroFormTemplate = {
  name: 'Hero Form Template',
  code: `
  <div class="container">
  <h1>Hero Form</h1>
  <div [hidden]="submitted">
  <form #heroForm="ngForm" (ngSubmit)="onSubmit()">
      <div class="form-group">
        <label for="name">Name</label>
          <input type="text"
                 class="form-control"
                 id="name"
                 [(ngModel)]="model.name"
                 name="name"
                 #name="ngModel"
                 required>
          <div [hidden]="name.valid || name.pristine" class="alert alert-danger">
                Name is required
          </div>
      </div>

      <div class="form-group">
          <label for="alterEgo">Alter Ego</label>
          <input type="text"
                 class="form-control"
                 [(ngModel)]="model.alterEgo"
                 name="alterEgo"
                 id="alterEgo">
      </div>

      <div class="form-group">
          <label for="power">Hero Power</label>
          <select class="form-control"
                  id="power"
                  [(ngModel)]="model.power"
                  name="power"
                  required>
            <option *ngFor="let pow of powers" [value]="pow">
                  {{ pow }}
            </option>
          </select>
      </div>

      <button type="submit" class="btn btn-success" [disabled]="!heroForm.form.valid">
        Submit
      </button>
      <button type="button" class="btn btn-default"
              (click)="newHero(); heroForm.reset();">
        New Hero
      </button>
  </form>
</div>
<div [hidden]="!submitted">
  <h2>You submitted the following:</h2>
  <div class="row">
    <div class="col-xs-3">Name</div>
    <div class="col-xs-9 pull-left">{{ model.name }}</div>
  </div>
  <div class="row">
      <div class="col-xs-3">Alter Ego</div>
      <div class="col-xs-9 pull-left">{{ model.alterEgo }}</div>
  </div>
  <div class="row">
      <div class="col-xs-3">Power</div>
      <div class="col-xs-9 pull-left">{{ model.power }}</div>
  </div>
  <br>
  <button class="btn btn-primary" (click)="submitted=false;">Edit</button>
</div>

<hr>
<input type="text" class="form-control" id="name" required
        [(ngModel)]="model.name" name="name">
        {{ model.name }}

<hr>
<input type="text" class="form-control" id="name"
       required
       [ngModel]="model.name"
       name="name"
       (ngModelChange)="model.name = $event">
       {{ model.name }}
<hr>
<input type="text" class="form-control" id="name"
       required
       [(ngModel)]="model.name"
       name="name"
       #spy>
       <br>{{ spy.className }}

</div>


  `
};

heroFormCSS = {
  name: 'Hero Form CSS',
  code: `
  .ng-valid[required], .ng-valid.required {
    border-left: 5px solid #42A948;
  }

  .ng-invalid:not(form) {
    border-left: 5px solid #a94442;
  }

  `
};

reactiveModule = {
  name: 'Initial Reactive Feature Module',
  code: `

  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { ReactiveFormsModule } from '@angular/forms';

  import { HeroDetail1Component } from './hero-detail1/hero-detail1.component';
  import { HeroDetail2Component } from './hero-detail2/hero-detail2.component';
  import { HeroDetail3Component } from './hero-detail3/hero-detail3.component';
  import { HeroDetail4Component } from './hero-detail4/hero-detail4.component';
  import { HeroDetail5Component } from './hero-detail5/hero-detail5.component';
  import { HeroDetail6Component } from './hero-detail6/hero-detail6.component';
  import { HeroDetail7Component } from './hero-detail7/hero-detail7.component';
  import { HeroDetail8Component } from './hero-detail8/hero-detail8.component';
  import { HeroDetail9Component } from './hero-detail9/hero-detail9.component';

  @NgModule({
    imports: [
      CommonModule,
      ReactiveFormsModule
    ],
    declarations: [
                    HeroDetail1Component,
                    HeroDetail2Component,
                    HeroDetail3Component,
                    HeroDetail4Component,
                    HeroDetail5Component,
                    HeroDetail6Component,
                    HeroDetail7Component,
                    HeroDetail8Component,
                    HeroDetail9Component
                  ],
    exports: [
               HeroDetail1Component,
               HeroDetail2Component,
               HeroDetail3Component,
               HeroDetail4Component,
               HeroDetail5Component,
               HeroDetail6Component,
               HeroDetail7Component,
               HeroDetail8Component,
               HeroDetail9Component
            ]
  })
  export class ReactiveModule { }

  `
};

dataModel = {
  name: 'Data Model',
  code: `
  export class Hero {
    id = 0;
    name = '';
    addresses: Address[];
  }

  export class Address {
    street = '';
    city = '';
    state = '';
    zip = '';
  }

  export const heroes: Hero[] = [

      {
        id: 1,
        name: 'Thor',
        addresses: [
          { street: '123 Kurfürstendamm', city: 'Berlin', state: 'BE', zip: '13001'},
          { street: '123 Maximilian Straße', city: 'München', state: 'BA', zip: '88181'}
        ]
      },
      {
        id: 2,
        name: 'Tyr',
        addresses: [
          { street: '123 Elbchaussee', city: 'Hamburg', state: 'HH', zip: '61636'}
        ]
      },
      {
        id: 3,
        name: 'Freyja',
        addresses: []
      }
  ];

  export const states = ['BE', 'BA', 'HH', 'BW'];


  `
};

justFormControl = {
  name: 'Just A Form Control',
  code: `
  import { Component } from '@angular/core';
  import { FormControl } from '@angular/forms';

  @Component({
    selector: 'app-hero-detail1',
    template: \`
            <h2>Hero Detail</h2>
            <h3>
                  <i>
                      Just a FormControl
                  </i>
            </h3>
            <label class="center-block">Name:
                  <input class="form-control" [formControl]="name">
            </label>
    \`
  })
  export class HeroDetail1Component {
    name = new FormControl();

  }

  `
};

formGroup = {
  name: 'Form Group',
  code: `
  import { Component } from '@angular/core';
  import { FormControl, FormGroup } from '@angular/forms';


  @Component({
    selector: 'app-hero-detail2',
    template: \`
              <h2>Hero Detail</h2>
                <h3>
                    <i>
                        FormControl in a FormGroup
                    </i>
                </h3>
              <form [formGroup]="heroForm" novalidate>
                <div class="form-group">
                    <label class="center-block">Name:
                        <input class="form-control" formControlName="name">
                    </label>
                </div>
              </form>
        <p>
            Form value: {{ heroForm.value | json }}
        </p>
        <p>
            Form status: {{ heroForm.status | json }}
        </p>
    \`
  })
  export class HeroDetail2Component  {
        heroForm = new FormGroup({
          name: new FormControl()
        });

  }


  `
};

formBuilderSingleControl = {
  name: 'Form Builder Single Control',
  code: `
  import { Component } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';

  @Component({
    selector: 'app-hero-detail3',
    template: \`
            <h2>Hero Detail</h2>
              <h3>
                  <i>
                      FormGroup with a single FormControl using FormBuilder
                  </i>
              </h3>
            <form [formGroup]="heroForm" novalidate>
                  <div class="form-group">
                      <label class="center-block">Name:
                        <input class="form-control" formControlName="name">
                      </label>
                  </div>
            </form>
                <p>
                    Form value: {{ heroForm.value | json }}
                </p>
                  <p>
                    Form status: {{ heroForm.status | json }}
                  </p>

    \`
  })
  export class HeroDetail3Component  {
          heroForm: FormGroup;

          constructor(private formBuilder: FormBuilder) {
            this.createForm();
          }

          createForm() {
            this.heroForm = this.formBuilder.group({
              name: ['', Validators.required ]
            });
          }

  }

  `
};

formGroupMultipleControls = {
  name: 'Form Group With Multiple Controls',
  code: `
  import { Component } from '@angular/core';
  import { FormGroup, FormBuilder, Validators } from '@angular/forms';

  import { states } from '../data-model';

  @Component({
    selector: 'app-hero-detail4',
    template: \`
                    <h2>Hero Detail</h2>
                    <h3>
                        <i>
                            A FormGroup with multiple FormControls
                        </i>
                    </h3>

                    <form [formGroup]="heroForm" novalidate>
                          <div class="form-group">
                            <label class="center-block">Name:
                                <input class="form-control" formControlName="name">
                            </label>
                          </div>
                          <div class="form-group">
                            <label class="center-block">Street:
                                <input class="form-control" formControlName="street">
                            </label>
                          </div>
                          <div class="form-group">
                            <label class="center-block">City:
                                <input class="form-control" formControlName="city">
                            </label>
                          </div>
                          <div class="form-group">
                            <label class="center-block">State:
                                <select class="form-control" formControlName="state">
                                      <option *ngFor="let state of states"
                                               [value]="state">
                                            {{ state }}
                                      </option>
                                </select>
                            </label>
                          </div>
                          <div class="form-group">
                            <label class="center-block">Zip Code:
                                <input class="form-control" formControlName="zip">
                            </label>
                          </div>
                          <div class="form-group radio">
                              <h4>Super Power:</h4>
                              <label class="center-block">
                                  <input type="radio"
                                  formControlName="power"
                                  value="flight">
                                  Flight
                              </label>
                              <label class="center-block">
                                  <input type="radio"
                                  formControlName="power"
                                  value="x-ray vision">
                                  X-Ray Vision
                              </label>
                              <label class="center-block">
                                  <input type="radio"
                                   formControlName="power"
                                    value="strength">
                                  Strength
                              </label>
                          </div>
                          <div class="checkbox">
                                  <label class="center-block">
                                        <input type="checkbox" formControlName="sidekick">
                                        I have a sidekick.
                                  </label>
                          </div>
                    </form>

                    <p>Form value: {{ heroForm.value | json }}</p>


    \`
  })
  export class HeroDetail4Component {
        heroForm: FormGroup;
        states = states;

        constructor(private formBuilder: FormBuilder) {
          this.createForm();
        }

        createForm() {
          this.heroForm = this.formBuilder.group({
            name: ['', Validators.required],
            street: '',
            city: '',
            state: '',
            zip: '',
            power: '',
            sidekick: ''
          });

        }

  }


  `
};

nestedFormBuilder = {
  name: 'Form Builder Group',
  code: `
  import { Component } from '@angular/core';
  import { FormGroup, FormBuilder, Validators } from '@angular/forms';

  import { states } from '../data-model';


  @Component({
    selector: 'app-hero-detail5',
    template: \`
    <form [formGroup]="heroForm" novalidate>
          <div class="form-group">
            <label class="center-block">Name:
                <input class="form-control" formControlName="name">
            </label>
          </div>
        <div formGroupName="address" class="well well-lg">
          <h4>Secret Lair</h4>
          <div class="form-group">
            <label class="center-block">Street:
                <input class="form-control" formControlName="street">
            </label>
          </div>
          <div class="form-group">
            <label class="center-block">City:
                <input class="form-control" formControlName="city">
            </label>
          </div>
          <div class="form-group">
            <label class="center-block">State:
                <select class="form-control" formControlName="state">
                      <option *ngFor="let state of states"
                               [value]="state">
                            {{ state }}
                      </option>
                </select>
            </label>
          </div>
            <div class="form-group">
              <label class="center-block">Zip Code:
                <input class="form-control" formControlName="zip">
              </label>
            </div>
        </div>
          <div class="form-group radio">
              <h4>Super Power:</h4>
              <label class="center-block">
                  <input type="radio" formControlName="power" value="flight">
                  Flight
              </label>
              <label class="center-block">
                  <input type="radio" formControlName="power" value="x-ray vision">
                  X-Ray Vision
              </label>
              <label class="center-block">
                  <input type="radio" formControlName="power" value="strength">
                  Strength
              </label>
          </div>
          <div class="checkbox">
                  <label class="center-block">
                        <input type="checkbox" formControlName="sidekick">
                        I have a sidekick.
                  </label>
          </div>
    </form>

        <p>Form value: {{ heroForm.value | json }}</p>
        <h4>Extra info for the curious:</h4>
        <p>Name value: {{ heroForm.get('name').value }}</p>
        <p>Street value: {{ heroForm.get('address.street').value }}</p>


    \`
  })
  export class HeroDetail5Component  {
    heroForm: FormGroup;
    states = states;


    constructor(private formBuilder: FormBuilder) {
      this.createForm();
    }

    createForm() {
        this.heroForm = this.formBuilder.group({
          name: ['', Validators.required],
          address: this.formBuilder.group({
            street: '',
            city: '',
            state: '',
            zip: ''
          }),
          power: '',
          sidekick: ''
        });
    }


  }


  `
};
heroService = {
  name: 'Hero Service',
  code: `
  import { Injectable } from '@angular/core';

  import { Hero, heroes } from './data-model';

  import { Observable } from 'rxjs/Observable';
  import { of } from 'rxjs/observable/of';
  import 'rxjs/add/operator/delay';


  @Injectable()
  export class HeroService {
    delayMs = 1000;

    getHeroes(): Observable<Hero[]> {
      return of(heroes).delay(this.delayMs);
    }

    updateHero(hero: Hero): Observable<Hero> {
      const oldHero = heroes.find(h => h.id === hero.id);
      const newHero = Object.assign(oldHero, hero);
      return of(newHero).delay(this.delayMs);
    }

  }


  `
};
patchValue = {
  name: 'Patch Value',
  code: `
  import { Component, Input, OnChanges } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';

  import { Hero, states } from '../data-model';

  @Component({
    selector: 'app-hero-detail6',
    template: \`
    <h2>Hero Detail</h2>
    <h3>
          <i>
              PatchValue to initialize a value
          </i>
    </h3>
    <form [formGroup]="heroForm" novalidate>
    <div class="form-group">
      <label class="center-block">Name:
          <input class="form-control" formControlName="name">
      </label>
    </div>
    <div formGroupName="address" class="well well-lg">
      <h4>Secret Lair</h4>
    <div class="form-group">
      <label class="center-block">Street:
          <input class="form-control" formControlName="street">
      </label>
    </div>
    <div class="form-group">
      <label class="center-block">City:
          <input class="form-control" formControlName="city">
      </label>
    </div>
    <div class="form-group">
      <label class="center-block">State:
          <select class="form-control" formControlName="state">
                <option *ngFor="let state of states"
                         [value]="state">
                      {{ state }}
                </option>
          </select>
      </label>
    </div>
      <div class="form-group">
        <label class="center-block">Zip Code:
          <input class="form-control" formControlName="zip">
        </label>
      </div>
    </div>
    <div class="form-group radio">
        <h4>Super Power:</h4>
        <label class="center-block">
            <input type="radio" formControlName="power" value="flight">
            Flight
        </label>
        <label class="center-block">
            <input type="radio" formControlName="power" value="x-ray vision">
            X-Ray Vision
        </label>
        <label class="center-block">
            <input type="radio" formControlName="power" value="strength">
            Strength
        </label>
    </div>
    <div class="checkbox">
            <label class="center-block">
                  <input type="checkbox" formControlName="sidekick">
                  I have a sidekick.
            </label>
    </div>
  </form>

  <p>Form value: {{ heroForm.value | json }}</p>

  \`
  })
  export class HeroDetail6Component implements OnChanges {
    @Input() hero: Hero;

    heroForm: FormGroup;
    states = states;


    constructor(private formBuilder: FormBuilder) {
      this.createForm();
    }

    createForm() {
      this.heroForm = this.formBuilder.group({
        name: ['', Validators.required ],
        address: this.formBuilder.group({
          street: '',
          city: '',
          state: '',
          zip: ''
        }),
        power: '',
        sidekick: ''
      });
    }

    ngOnChanges() {
      this.heroForm.reset();
      this.heroForm.patchValue({
        name: this.hero.name
      });
    }

  }

  /*
  Copyright 2017-2018 Google Inc. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */


  `
};
appComponent = {
  name: 'App Component Host',
  code: `
  import { Component, OnInit } from '@angular/core';

  import { HeroService } from './reactive/hero.service';
  import { Hero } from './reactive/data-model';

  import { Observable } from 'rxjs/Observable';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent implements OnInit {

    heroes: Observable<Hero[]>;
    selectedHero: Hero;

    constructor(private heroService: HeroService) { }

    getHeroes() {
      this.heroes = this.heroService.getHeroes();
      this.selectedHero = undefined;
    }

    select(hero: Hero) {
      this.selectedHero = hero;
    }

    ngOnInit() {
      this.getHeroes();
    }

  }


  `
};
appComponentTemplate = {
  name: 'App Component Template',
  code: `

          <div class="container">
                    <h1>Reactive Forms</h1>
                    <!-- <app-hero-detail1></app-hero-detail1>
                    <app-hero-detail2></app-hero-detail2>
                    <app-hero-detail3></app-hero-detail3>
                    <app-hero-detail4></app-hero-detail4>
                    <app-hero-detail5></app-hero-detail5> -->

                <hr>
                    <nav>
                      <button (click)="getHeroes()" class="btn btn-primary">
                      Refresh
                      </button>
                      <a *ngFor="let hero of heroes | async" (click)="select(hero)">
                                {{ hero.name }}
                      </a>
                    </nav>
              <div *ngIf="selectedHero">
                <hr>
                  <h2>Hero Detail</h2>
                  <h3>Editing: {{ selectedHero.name }}</h3>
                  <app-hero-detail6 [hero]="selectedHero"></app-hero-detail6>
                  <!-- <app-hero-detail7 [hero]="selectedHero"></app-hero-detail7>
                        <app-hero-detail8 [hero]="selectedHero"></app-hero-detail8> -->
              </div>

          </div>


  `
};
setValue = {
  name: 'Set Value',
  code: `
  import { Component, Input, OnChanges } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';

  import { Hero, Address, states } from '../data-model';

  @Component({
    selector: 'app-hero-detail7',
    template: \`
    <h2>Hero Detail</h2>
    <h3>
          <i>
              PatchValue to initialize a value
          </i>
    </h3>
    <form [formGroup]="heroForm" novalidate>
    <div class="form-group">
      <label class="center-block">Name:
          <input class="form-control" formControlName="name">
      </label>
    </div>
    <div formGroupName="address" class="well well-lg">
      <h4>Secret Lair</h4>
    <div class="form-group">
      <label class="center-block">Street:
          <input class="form-control" formControlName="street">
      </label>
    </div>
    <div class="form-group">
      <label class="center-block">City:
          <input class="form-control" formControlName="city">
      </label>
    </div>
    <div class="form-group">
      <label class="center-block">State:
          <select class="form-control" formControlName="state">
                <option *ngFor="let state of states"
                         [value]="state">
                      {{ state }}
                </option>
          </select>
      </label>
    </div>
      <div class="form-group">
        <label class="center-block">Zip Code:
          <input class="form-control" formControlName="zip">
        </label>
      </div>
    </div>
    <div class="form-group radio">
        <h4>Super Power:</h4>
        <label class="center-block">
            <input type="radio" formControlName="power" value="flight">
            Flight
        </label>
        <label class="center-block">
            <input type="radio" formControlName="power" value="x-ray vision">
            X-Ray Vision
        </label>
        <label class="center-block">
            <input type="radio" formControlName="power" value="strength">
            Strength
        </label>
    </div>
    <div class="checkbox">
            <label class="center-block">
                  <input type="checkbox" formControlName="sidekick">
                  I have a sidekick.
            </label>
    </div>
  </form>

  <p>Form value: {{ heroForm.value | json }}</p>
  <h4>Extra info for the curious:</h4>
  <p>Name value: {{ heroForm.get('name').value }}</p>

  <p>Street value: {{ heroForm.get('address.street').value }}</p>


    \`
  })
  export class HeroDetail7Component implements OnChanges {
    @Input() hero: Hero;

    heroForm: FormGroup;
    states = states;

    constructor(private formBuilder: FormBuilder) {
      this.createForm();
     }

     createForm() {
       this.heroForm = this.formBuilder.group({
         name: ['', Validators.required ],
         address: this.formBuilder.group(new Address()),
         power: '',
         sidekick: ''
       });
     }

    ngOnChanges() {
      this.heroForm.reset({
        name: this.hero.name,
        address: this.hero.addresses[0] || new Address()
      });
    }

    ngOnChanges1() {
      this.heroForm.reset();
      this.heroForm.setValue({
        name: this.hero.name,
        address: this.hero.addresses[0] || new Address(),
        power: 'strength',
        sidekick: true
      });
    }

  }

   /*
    Copyright 2017-2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license
    */


  `
};
formArrayAddGroups = {
  name: 'Form Array Add Groups',
  code: `
  import { Component, Input, OnChanges } from '@angular/core';
  import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

  import { Hero, Address, states } from '../data-model';

  @Component({
    selector: 'app-hero-detail8',
    template: \`
    <h3>
          <i>
              Using FormArray to add Groups
          </i>
    </h3>
    <form [formGroup]="heroForm" novalidate>
    <p>Form Changed: {{ heroForm.dirty }}</p>
    <div class="form-group">
      <label class="center-block">Name:
          <input class="form-control" formControlName="name">
      </label>
    </div>
    <div formArrayName="secretLairs" class="well well-lg">

    <div *ngFor="let address of secretLairs.controls; let i = index;" [formGroupName]="i">
    <h4>Address #{{ i + 1 }}</h4>

    <div style="margin-left: 1em;">
    <div class="form-group">
      <label class="center-block">Street:
          <input class="form-control" formControlName="street">
      </label>
    </div>
    <div class="form-group">
      <label class="center-block">City:
          <input class="form-control" formControlName="city">
      </label>
    </div>
    <div class="form-group">
      <label class="center-block">State:
          <select class="form-control" formControlName="state">
                <option *ngFor="let state of states"
                         [value]="state">
                      {{ state }}
                </option>
          </select>
      </label>
    </div>
      <div class="form-group">
        <label class="center-block">Zip Code:
          <input class="form-control" formControlName="zip">
        </label>
      </div>
    </div>
    <br>
  </div>
  <button (click)="addLair()" type="button">Add Secret Lair</button>
  </div>
    <div class="form-group radio">
        <h4>Super Power:</h4>
        <label class="center-block">
            <input type="radio" formControlName="power" value="flight">
            Flight
        </label>
        <label class="center-block">
            <input type="radio" formControlName="power" value="x-ray vision">
            X-Ray Vision
        </label>
        <label class="center-block">
            <input type="radio" formControlName="power" value="strength">
            Strength
        </label>
    </div>
    <div class="checkbox">
            <label class="center-block">
                  <input type="checkbox" formControlName="sidekick">
                  I have a sidekick.
            </label>
    </div>
  </form>

  <p>Form value: {{ heroForm.value | json }}</p>


    \`
  })
  export class HeroDetail8Component implements OnChanges {
    @Input() hero: Hero;

    heroForm: FormGroup;
    states = states;


    constructor(private formBuilder: FormBuilder) {
      this.createForm();
      this.logNameChanges();
    }

    createForm() {
      this.heroForm = this.formBuilder.group({
        name: [ '', Validators.required ],
        secretLairs: this.formBuilder.array([]),
        power: '',
        sidekick: ''
      });
    }

    logNameChanges() {
      // TODO ...
    }

    ngOnChanges() {
      this.heroForm.reset({
        name: this.hero.name
      });
      this.setAddresses(this.hero.addresses);
    }

    get secretLairs(): FormArray {
      return this.heroForm.get('secretLairs') as FormArray;
    }

    setAddresses(addresses: Address[]) {
      const addressFormGroup = addresses.map(address => this.formBuilder.group(address));
      const addressFormArray = this.formBuilder.array(addressFormGroup);
      this.heroForm.setControl('secretLairs', addressFormArray);
    }

    addLair() {
      this.secretLairs.push(this.formBuilder.group(new Address()));
    }

  }


  `
};
finalReactiveCode = {
  name: 'Final Reactive Forms Component Code',
  code: `
  import { Component, Input, OnChanges, OnDestroy } from '@angular/core';
  import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

  import { Hero, Address, states } from '../data-model';
  import { HeroService } from '../hero.service';

  import { Subscription } from 'rxjs/Subscription';

  @Component({
    selector: 'app-hero-detail9',
    template: \`

      <form [formGroup]="heroForm" (ngSubmit)="onSubmit()" novalidate>
      <div style="margin-bottom: 1em;">
          <button type="submit"
                  [disabled]="heroForm.pristine"
                  class="btn btn-success">
          Save
          </button> &nbsp;
          <button type="reset"
                  (click)="revert()"
                  [disabled]="heroForm.pristine"
                  class="btn btn-danger">
          Revert
          </button>
      </div>
  <div class="form-group">
  <label class="center-block">Name:
    <input class="form-control" formControlName="name">
  </label>
  </div>
  <div formArrayName="secretLairs" class="well well-lg">
  <div *ngFor="let address of secretLairs.controls; let i = index;" [formGroupName]="i">
  <h4>Address #{{ i + 1 }}</h4>
  <div style="margin-left: 1em;">
  <div class="form-group">
  <label class="center-block">Street:
    <input class="form-control" formControlName="street">
  </label>
  </div>
  <div class="form-group">
  <label class="center-block">City:
    <input class="form-control" formControlName="city">
  </label>
  </div>
  <div class="form-group">
  <label class="center-block">State:
    <select class="form-control" formControlName="state">
          <option *ngFor="let state of states"
                   [value]="state">
                {{ state }}
          </option>
    </select>
  </label>
  </div>
  <div class="form-group">
  <label class="center-block">Zip Code:
    <input class="form-control" formControlName="zip">
  </label>
  </div>
  </div>
  <br>
  </div>
  <button (click)="addLair()" type="button">Add Secret Lair</button>
  </div>
  <div class="form-group radio">
  <h4>Super Power:</h4>
  <label class="center-block">
      <input type="radio" formControlName="power" value="flight">
      Flight
  </label>
  <label class="center-block">
      <input type="radio" formControlName="power" value="x-ray vision">
      X-Ray Vision
  </label>
  <label class="center-block">
      <input type="radio" formControlName="power" value="strength">
      Strength
  </label>
  </div>
  <div class="checkbox">
      <label class="center-block">
            <input type="checkbox" formControlName="sidekick">
            I have a sidekick.
      </label>
  </div>
  </form>

  <p>Form value: {{ heroForm.value | json }}</p>

  <h4>
        Name change log
  </h4>
  <div *ngFor="let change of nameChangeLog">{{ change }}</div>

    \`
  })
  export class HeroDetail9Component implements OnChanges, OnDestroy {
    @Input() hero: Hero;

    heroForm: FormGroup;
    nameChangeLog: string[] = [];
    states = states;

    private heroUpdateSubscription: Subscription;

    constructor(private formBuilder: FormBuilder,
                private heroService: HeroService) {
                  this.createForm();
                  this.logNameChanges();
                }

    createForm() {
      this.heroForm = this.formBuilder.group({
        name: '',
        secretLairs: this.formBuilder.array([]),
        power: '',
        sidekick: ''
      });
    }



    logNameChanges() {
      const nameControl = this.heroForm.get('name');
      nameControl.valueChanges.forEach(
        (value: string) => this.nameChangeLog.push(value)
      );
    }

    ngOnChanges() {
      this.heroForm.reset({
        name: this.hero.name
      });
      this.setAddresses(this.hero.addresses);
    }

    get secretLairs(): FormArray {
      return this.heroForm.get('secretLairs') as FormArray;
    }

    setAddresses(addresses: Address[]) {
      const addressFormGroup = addresses.map(address => this.formBuilder.group(address));
      const addressFormArray = this.formBuilder.array(addressFormGroup);
      this.heroForm.setControl('secretLairs', addressFormArray);
    }

    addLair() {
      this.secretLairs.push(this.formBuilder.group(new Address()));
    }

    onSubmit() {
      this.hero = this.prepareSaveHero();
      this.heroUpdateSubscription = this.heroService.updateHero(this.hero).subscribe();
      this.ngOnChanges();
    }

    prepareSaveHero() {
      const formModel = this.heroForm.value;

      const secretLairsDeepCopy: Address[] = formModel.secretLairs.map(
          (address: Address) => Object.assign({}, address)
      );

      const savedHero: Hero = {
        id: this.hero.id,
        name: formModel.name as string,
        addresses: secretLairsDeepCopy
      };
      return savedHero;
    }

    revert() {
      this.ngOnChanges();
    }

    logNameChange() {
      const nameControl = this.heroForm.get('name');
      nameControl.valueChanges.forEach((value: string) => {
            this.nameChangeLog.push(value);
      });

    }

    ngOnDestroy() {
      this.heroUpdateSubscription.unsubscribe();
    }

  }


  `
};
dynamicFormsModule = {
  name: 'Dynamic Forms Module',
  code: `
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { ReactiveFormsModule } from '@angular/forms';

  import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
  import { DynamicFormQuestionComponent }
  from './dynamic-form-question/dynamic-form-question.component';

  @NgModule({
    imports: [
      CommonModule,
      ReactiveFormsModule
    ],
    declarations: [ DynamicFormComponent, DynamicFormQuestionComponent ],
    exports: [ DynamicFormComponent ]
  })
  export class DynamicFormsModule { }


  `
};
dynamicFormsQuestionService = {
  name: 'Question Service',
  code: `
  import { Injectable } from '@angular/core';

  import { QuestionBase } from './question-base';
  import { DropDownQuestion } from './question-dropdown';
  import { TextboxQuestion } from './question-textbox';

  @Injectable()
  export class QuestionService {

    getQuestions() {

      const questions: QuestionBase<any>[] = [

          new DropDownQuestion({
            key: 'brave',
            label: 'Bravery Rating',
            options: [
              { key: 'solid', value: 'Solid' },
              { key: 'great', value: 'Great' },
              { key: 'good', value: 'Good' },
              { key: 'unproven', value: 'Unproven'}
            ],
            order: 3
          }),

          new TextboxQuestion({
            key: 'firstName',
            label: 'First name',
            value: 'Flash',
            required: true,
            order: 1
          }),

          new TextboxQuestion({
            key: 'emailAddress',
            label: 'Email',
            type: 'email',
            order: 2
          })
      ];

      return questions.sort((a, b) => a.order - b.order);
    }

  }


  `
};
dynamicFormsModuleQuestionControlService = {
  name: 'Question Control Service',
  code: `
  import { Injectable } from '@angular/core';
  import { FormControl, FormGroup, Validators } from '@angular/forms';

  import { QuestionBase } from './question-base';

  @Injectable()
  export class QuestionControlService {

    constructor() { }

    toFormGroup(questions: QuestionBase<any>[]) {
      const group: any = {};

      questions.forEach(question => {
        group[question.key] = question.required ?
                          new FormControl(question.value || '', Validators.required) :
                          new FormControl(question.value || '');
      });
      return new FormGroup(group);
    }

  }


  `
};
dynamicFormsModuleQuestionBase = {
  name: 'Question Base',
  code: `
  export class QuestionBase<T> {
    value: T;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;

    constructor(options: {
        value?: T,
        key?: string,
        label?: string,
        required?: boolean,
        order?: number,
        controlType?: string
    } = {}) {
      this.value = options.value;
      this.key = options.key || '';
      this.label = options.label || '';
      this.required = !!options.required;
      this.order = options.order === undefined ? 1 : options.order;
      this.controlType = options.controlType || '';
    }

  }

  `
};
dynamicFormsModuleTextboxQuestion = {
  name: 'Textbox Question',
  code: `
  import { QuestionBase } from './question-base';

  export class TextboxQuestion extends QuestionBase<string> {
          controlType = 'textbox';
          type: string;

          constructor(options: {} = {}) {
            super(options);
            this.type = options['type'] || '';
          }


  }

  `
};
dynamicFormsModuleDropdownQuestion = {
  name: 'Dropdown Question',
  code: `
  import { QuestionBase } from './question-base';


  export class DropDownQuestion extends QuestionBase<string> {
    controlType = 'dropdown';
    options: { key: string, value: string}[] = [];

    constructor(options: {} = {}) {
      super(options);
      this.options = options['options'] || [];
    }

  }
  `
};
dynamicFormsModuleQuestionComponent = {
  name: 'Dynamic Form Question Component',
  code: `
  import { Component, Input } from '@angular/core';
  import { FormGroup } from '@angular/forms';

  import { QuestionBase } from '../question-base';

  @Component({
    selector: 'app-dynamic-form-question',
    template: \`
          <div [formGroup]="form">
            <label [attr.for]="question.key">{{ question.label }}</label>

            <div [ngSwitch]="question.controlType">
                <input *ngSwitchCase="'textbox'" [formControlName]="question.key"
                        [id]="question.key" [type]="question.type">

            <select [id]="question.key" *ngSwitchCase="'dropdown'"
                    [formControlName]="question.key">
                <option *ngFor="let opt of question.options" [value]="opt.key">
                      {{ opt.value }}
                </option>
            </select>
            </div>

          <div class="errorMessage" *ngIf="!isValid">{{ question.label }} is required</div>

          </div>
    \`
  })
  export class DynamicFormQuestionComponent {
    @Input() question: QuestionBase<any>;
    @Input() form: FormGroup;

    get isValid() {
      return this.form.controls[this.question.key].valid;
    }

  }

  `
};
dynamicFormsModuleDynamicComponent = {
  name: 'Dynamic Form Component',
  code: `
  import { Component, Input, OnInit } from '@angular/core';
  import { FormGroup } from '@angular/forms';

  import { QuestionBase } from '../question-base';
  import { QuestionControlService } from '../question-control.service';

  @Component({
    selector: 'app-dynamic-form',
    template: \`
          <div>
              <form (ngSubmit)="onSubmit()" [formGroup]="form">
                  <div *ngFor="let question of questions" class="form-row">
                          <app-dynamic-form-question [question]="question" [form]="form">
                          </app-dynamic-form-question>
                  </div>
                  <div class="form-row">
                      <button type="submit" [disabled]="!form.valid">Save</button>
                  </div>
              </form>

              <div *ngIf="payLoad" class="form-row">
                  <strong>Saved the following values</strong>
                  <br>
                  {{ payLoad }}
              </div>

          </div>
    \`,
  })
  export class DynamicFormComponent implements OnInit {

    @Input() questions: QuestionBase<any>[] = [];
    form: FormGroup;
    payLoad = '';

    constructor(private questionControlService: QuestionControlService) { }

    ngOnInit() {
      this.form = this.questionControlService.toFormGroup(this.questions);
    }

    onSubmit() {
      this.payLoad = JSON.stringify(this.form.value);
    }

  }

  `
};
dynamicFormsModuleAppComponent = {
  name: 'App Component Host',
  code: `

  import { Component, OnInit } from '@angular/core';

  import { QuestionService } from './dynamic-forms/question.service';


  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent implements OnInit {
    questions: any[];

    constructor(private questionService: QuestionService) { }

    ngOnInit() {
      this.questions = this.questionService.getQuestions();
    }

  }


  `
};
dynamicFormsModuleAppTemplate = {
  name: 'App Component Template',
  code: `

        <div class="container">

                <h1>Dynamic Forms</h1>
                <app-dynamic-form [questions]="questions"></app-dynamic-form>

        </div>

  `
};
dynamicFormsModuleHigherOrderFunctions = {
  name: 'Higher Order Functions',
  code: `
  technologies = [
    { name: 'Angular', githubStars: 33000, corporateBacked: true },
    { name: 'React', githubStars: 88100, corporateBacked: true },
    { name: 'VueJS', githubStars: 83400, corporateBacked: false }
  ];

  technologiesAbove80K(): string[] {
      return this.technologies
                  .filter((technology) => technology.githubStars >= 80000)
                  .map(t => t.name);
  }

  technologiesCorporateBacked(): Array<string> {
        return this.technologies
                  .filter((technology) => technology.corporateBacked === true)
                  .map(tech => tech.name);
  }

  totalAllStars(): number {
    return this.technologies.reduce((acc, curr) => acc + curr.githubStars , 0);
  }

  totalStarsAbove80K(): number {
    return this.technologies.filter((technology) => technology.githubStars >= 80000)
                            .reduce((acc, curr) => acc + curr.githubStars, 0);
  }


  `
};
forbiddenNameValidatorDirective = {
  name: 'Forbidden Name Validator Directive',
  code: `

  import { Directive, Input } from '@angular/core';
  import { AbstractControl, NG_VALIDATORS, ValidatorFn } from '@angular/forms';

  // hero's name can't match given regular expression
  export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? {'forbiddenName': { value: control.value }} : null;
    };
  }

  @Directive({
    selector: '[appForbiddenName]',
    providers: [{provide: NG_VALIDATORS,
                 useExisting: ForbiddenNameValidatorDirective,
                 multi: true }]
  })
  export class ForbiddenNameValidatorDirective {
    @Input() appForbiddenName: string;

    validate(control: AbstractControl): {[key: string]: any} {
      return this.appForbiddenName ?
      forbiddenNameValidator(new RegExp(this.appForbiddenName, 'i'))(control) : null;
    }

  }

  `
};
heroFormTemplateComponent = {
  name: 'Hero Form Template Component',
  code: `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-hero-form-template',
    template: \`

        <div class="container">
              <h1>Template-DRIVEN Form</h1>
              <form #heroForm="ngForm">
                  <div [hidden]="heroForm.submitted">

                  <div class="form-group">
                    <label for="name">Name</label>
                    <input id="name" name="name" class="form-control"
                    required minlength="4" appForbiddenName="react"
                    [(ngModel)]="hero.name" #name="ngModel">

                    <div *ngIf="name.invalid && (name.dirty || name.touched)"
                          class="alert alert-danger">

                    <div *ngIf="name.errors.required">
                      Name is required.
                    </div>
                    <div *ngIf="name.errors.minlength">
                      Name must be at least 4 characters long.
                    </div>
                    <div *ngIf="name.errors.forbiddenName">
                      Name cannot be React.
                    </div>

                    </div>
                  </div>

                  <div class="form-group">
                      <label for="alterEgo">Alter Ego</label>
                      <input id="alterEgo" class="form-control"
                             name="alterEgo" [(ngModel)]="hero.alterEgo">
                  </div>
                  <div class="form-group">
                      <label for="power">Hero Power</label>
                      <select id="power" name="power" class="form-control"
                              required [(ngModel)]="hero.power" #power="ngModel">
                        <option *ngFor="let pows of powers" [value]="pows">
                              {{ pows }}
                        </option>
                      </select>

                      <div *ngIf="power.errors && power.touched" class="alert alert-danger">
                       <div *ngIf="power.errors.required">Power is required</div>
                      </div>
                  </div>

                  <button type="submit" class="btn btn-default"
                          [disabled]="heroForm.invalid">
                  Submit
                  </button>
                  <button type="button" class="btn btn-default"
                          (click)="heroForm.resetForm({})">
                  Reset
                  </button>
                </div>

                <div class="submitted-message" *ngIf="heroForm.submitted">
                    <p>You've submitted your hero, {{ heroForm.value.name }}!</p>
                    <button (click)="heroForm.resetForm({})">Add new hero</button>
                </div>
              </form>
        </div>
    \`
  })
  export class HeroFormTemplateComponent {

    powers = ['Really Smart', 'Super Hot', 'Game Changer'];

    hero = {
      name: 'Nils',
      alterEgo: 'Flash',
      power: this.powers[2]
    };

  }


  `
};
heroFormReactiveComponent = {
  name: 'Hero Form Reactive Component',
  code: `
  import { Component, OnInit } from '@angular/core';
  import { FormControl, FormGroup, Validators } from '@angular/forms';

  import { forbiddenNameValidator } from '../forbidden-name.directive';

  @Component({
    selector: 'app-hero-form-reactive',
    template: \`
                <div class="container">
                  <h1>Reactive Form</h1>
                  <form [formGroup]="heroForm" #formDir="ngForm">
                      <div [hidden]="formDir.submitted">
                          <div class="form-group">
                              <label for="name">Name</label>
                              <input id="name" class="form-control"
                                      formControlName="name" required>
                              <div *ngIf="name.invalid && (name.dirty || name.touched)"
                                    class="alert alert-danger">
                              <div *ngIf="name.errors.required">
                                Name is required.
                              </div>
                              <div *ngIf="name.errors.minlength">
                                Name must be at least 4 characters long.
                              </div>
                              <div *ngIf="name.errors.forbiddenName">
                                Name cannot be React.
                              </div>
                          </div>
                      </div>

                      <div class="form-group">
                            <label for="alterEgo">Alter Ego</label>
                            <input id="alterEgo"
                                   class="form-control"
                                   formControlName="alterEgo">
                      </div>

                      <div class="form-group">
                            <label for="power">Hero Power</label>
                            <select id="power" class="form-control"
                                    formControlName="power" required>
                                <option *ngFor="let pow of powers" [value]="pow">
                                  {{ pow }}
                                </option>
                            </select>

                            <div *ngIf="power.invalid && power.touched"
                                  class="alert alert-danger">
                                  <div *ngIf="power.errors.required">Power is required</div>
                            </div>
                      </div>

                      <button type="submit" class="btn btn-default"
                              [disabled]="heroForm.invalid">
                        Submit
                      </button>
                      <button type="button" class="btn btn-default"
                              (click)="formDir.resetForm({})">
                        Reset
                      </button>
                      </div>
                  </form>

                <div class="submitted-message" *ngIf="formDir.submitted">
                  <p>You've submitted your hero, {{ heroForm.value.name }}!</p>
                  <button (click)="formDir.resetForm({})">Add new hero</button>
                </div>
              </div>
    \`
  })
  export class HeroFormReactiveComponent implements OnInit {

    heroForm: FormGroup;

    powers = ['Really Flexible', 'Super Smart', 'Game Changer'];

    hero = {
        name: 'Carmen',
        alterEgo: 'Wonderwoman',
        power: this.powers[1]
      };

    ngOnInit(): void {
      this.heroForm = new FormGroup({
        'name': new FormControl(this.hero.name, [
          Validators.required,
          Validators.minLength(4),
          forbiddenNameValidator(/react/i)
        ]),
        'alterEgo': new FormControl(this.hero.alterEgo),
        'power': new FormControl(this.hero.power, Validators.required)
      });
    }

    get name() {
        return this.heroForm.get('name');
    }

    get power() {
      return this.heroForm.get('power');
    }

  }


  `
};
diMockHeroes = {
  name: 'In Memory Collection',
  code: `
  import { Hero } from './hero';

  export const HEROES: Hero[] = [
    { id: 11, isSecret: false, name: 'Odin' },
    { id: 12, isSecret: false, name: 'Thor' },
    { id: 13, isSecret: false, name: 'Frigg' },
    { id: 14, isSecret: false, name: 'Freyja' },
    { id: 15, isSecret: false, name: 'Heimdall' },
    { id: 16, isSecret: false, name: 'Loki' },
    { id: 17, isSecret: false, name: 'Baldur' },
    { id: 18, isSecret: true, name: 'Tyr' },
    { id: 19, isSecret: true, name: 'Mani' },
    { id: 20, isSecret: true, name: 'Sol' }
  ];


  `
};
diHeroClass = {
  name: 'Hero Class',
  code: `

  export class Hero {
    id: number;
    name: string;
    isSecret = false;
  }

  `
};
diLoggerService = {
  name: 'Logger Service',
  code: `

  import { Injectable } from '@angular/core';


  @Injectable()
  export class Logger {
    logs: string[] = [];

    log(message: string): void {
      this.logs.push(message);
      console.log(message);
    }

  }

  `
};
diUserService = {
  name: 'User Service',
  code: `
  import { Injectable } from '@angular/core';

  export class User {
    constructor(public name: string, public isAuthorized = false) {}
  }

  const carmen = new User('Carmen', true);
  const nils = new User('Nils', false);


  @Injectable()
  export class UserService {
    user = nils;

    getNewUser() {
      this.user = this.user === nils ? carmen : nils;
    }

  }

  `
};
diHeroService = {
  name: 'Hero Service',
  code: `

  import { Injectable } from '@angular/core';
  import { HEROES } from './mock-heroes';
  import { Logger } from '../logger.service';


  @Injectable()
  export class HeroService {

    constructor(private logger: Logger, private isAuthorized: boolean) { }


    getHeroes() {
      const auth = this.isAuthorized ? 'authorized' : 'unauthorized';
      this.logger.log(\`Getting heroes for \${auth} user.\`);
      return HEROES.filter(hero => this.isAuthorized || !hero.isSecret);
    }

  }

  `
};
diHeroServiceProvider = {
  name: 'Hero Service Provider',
  code: `

  /* tslint:disable:one-line */
  import { HeroService } from './hero.service';
  import { Logger } from '../logger.service';
  import { UserService } from '../user.service';

  const heroServiceFactory = (logger: Logger, userService: UserService) => {
        return new HeroService(logger, userService.user.isAuthorized);
  };

  export const heroServiceProvider =
          {
            provide: HeroService,
            useFactory: heroServiceFactory,
            deps: [ Logger, UserService ]
          };



  `
};
diHeroListComponent = {
  name: 'Hero List Component',
  code: `
  /\* tslint:disable:one-line */
  import { Component } from '@angular/core';

  import { Hero } from './hero';
  import { HeroService } from './hero.service';

  @Component({
    selector: 'app-hero-list',
    template:  \`
          <div *ngFor="let hero of heroes">
                {{ hero.id }} - {{ hero.name }}
                ({{ hero.isSecret ? 'secret' : 'public' }})
          </div>
    \`
  })
  export class HeroListComponent {
    heroes: Hero[];

    constructor(heroService: HeroService)
    {
        this.heroes = heroService.getHeroes();
    }

  }


  `
};
diHeroesComponent = {
  name: 'Heroes Component',
  code: `

  import { Component } from '@angular/core';
  import { heroServiceProvider } from './hero.service.provider';

  @Component({
    selector: 'app-heroes',
    template: \`
              <h2>Heroes</h2>
              <app-hero-list></app-hero-list>
    \`,
    providers: [ heroServiceProvider ]
  })
  export class HeroesComponent { }


  `
};
diCarService = {
  name: 'Car Service',
  code: `

  import { Injectable } from '@angular/core';

  export class Engine {
    public cylinders = 4;
  }

  export class Tires {
    public make = 'Flinstone';
    public model = 'Square';
  }


  @Injectable()
  export class Car {
    public description = 'DI';

    constructor(public engine: Engine, public tires: Tires) { }

    drive() {
      return \`\${this.description} car with \` +
            \`\${this.engine.cylinders} cylinders and \${this.tires.make} tires.\`;
    }

  }

  `
};
diCarNoDi = {
  name: 'Car No Dependency Injection',
  code: `

  import { Engine, Tires } from './car';

  export class Car {
    public engine: Engine;
    public tires: Tires;
    public description = 'No DI';

    constructor() {
      this.engine = new Engine();
      this.tires = new Tires();
    }


    drive() {
      return \`\${this.description} car with \` +
      \`\${this.engine.cylinders} cylinders and \${this.tires.make} tires.\`;
    }


  }
  `
};
diCarInjector = {
  name: 'Car Injector',
  code: `
  import { ReflectiveInjector } from '@angular/core';

  import { Car, Engine, Tires } from './car';
  import { Logger } from '../logger.service';

  export function useInjector() {
    let injector: ReflectiveInjector;

    injector = ReflectiveInjector.resolveAndCreate([Car, Engine, Tires]);
    const car = injector.get(Car);
    car.description = 'Injector';

    injector = ReflectiveInjector.resolveAndCreate([Logger]);
    const logger = injector.get(Logger);
    logger.log('Injector car.drive() said: ' + car.drive());
    return car;
  }

  `
};
diCarFactory = {
  name: 'Car Factory',
  code: `
  import { Engine, Tires, Car } from './car';

  // BAD PATTERN
  export class CarFactory {

    createCar() {
      const car = new Car(this.createEngine(), this.createTires());
      car.description = 'Factory';
      return car;
    }

    createEngine() {
      return new Engine();
    }

    createTires() {
      return new Tires();
    }

  }

  `
};
diCarCreations = {
  name: 'Car Creations',
  code: `
  // example with car and engine variations

  import { Car, Engine, Tires } from './car';

  // example 1
  export function simpleCar() {
    const car = new Car(new Engine(), new Tires());
    car.description = 'Simple';
    return car;
  }

  // example 2
  class Engine2 {
    constructor(public cylinders: number) { }
  }

  export function superCar() {
    const bigCylinders = 12;
    const car = new Car(new Engine2(bigCylinders), new Tires());
    car.description = 'Super';
    return car;
  }

  // example 3
  class MockEngine extends Engine {
    cylinders = 8;
  }
  class MockTires extends Tires {
    make = 'YokoGoodStone';
  }

  export function testCar() {
    const car = new Car(new MockEngine(), new MockTires());
    car.description = 'Test';
    return car;
  }


  `
};
diInjectorComponent = {
  name: 'Injector Component',
  code: `
  import { Component, Injector, OnInit } from '@angular/core';

  import { Car, Engine, Tires } from '../car/car';
  import { Hero } from '../heroes/hero';
  import { HeroService } from '../heroes/hero.service';
  import { heroServiceProvider } from '../heroes/hero.service.provider';
  import { Logger } from '../logger.service';

  @Component({
    selector: 'app-injectors',
    template: \`
          <h2>Other Injections</h2>
          <div id="car">{{ car.drive() }}</div>
          <div id="hero">{{ hero.name }}</div>
          <div id="rodent">{{ rodent }}</div>
    \`,
    providers: [ Car, Engine, Tires, heroServiceProvider, Logger ]
  })
  export class InjectorComponent implements OnInit {
    car: Car;

    heroService: HeroService;
    hero: Hero;

    constructor(private injector: Injector) { }

    ngOnInit() {
      this.car = this.injector.get(Car);
      this.heroService = this.injector.get(HeroService);
      this.hero = this.heroService.getHeroes()[0];
    }

    get rodent() {
      const rousDontExist = \`R.O.U.S.'s? I don't think they exist\`;
      return this.injector.get(ROUS, rousDontExist);
    }

  }

  class ROUS {}


  `
};
diTestComponent = {
  name: 'Test Component',
  code: `
  import { Component } from '@angular/core';

  import { Hero } from '../heroes/hero';
  import { HeroService } from '../heroes/hero.service';
  import { HeroListComponent } from '../heroes/hero-list.component';

  @Component({
    selector: 'app-tests',
    template: \`
          <h2>Tests</h2>
          <p id="tests">Tests {{ results.pass }}: {{ results.message }}</p>
    \`
  })
  export class TestComponent {
    results = runTests();

  }

  function runTests() {
    const expectedHeroes = [ { name: 'Carmen' }, { name: 'Nils' } ];
    const mockService = <HeroService> { getHeroes: () => expectedHeroes };

    it('should have heroes when HeroListComponent created', () => {
      const component = new HeroListComponent(mockService);
      expect(component.heroes.length).toEqual(expectedHeroes.length);
    });
    return testResults;
  }

  let testName = '';
  let testResults = { pass : '', message : ''};

  function expect(actual: any) {
    return {
      toEqual: function(expected: any) {
        testResults = actual === expected ?
            { pass: 'passed', message: testName } :
            { pass: 'failed',
            message: \`\${testName}; expected \${actual} to equal \${expected}.\`};
      }
    };
  }

  function it(label: string, test: () => void) {
    testName = label;
    test();
  }

  `
};
diProvidersComponent = {
  name: 'Providers Components',
  code: `
  import { Component, Inject, Injectable, OnInit } from '@angular/core';

  import { AppConfig, APP_CONFIG, HERO_DI_CONFIG } from '../app.config';

  import { HeroService } from '../heroes/hero.service';
  import { heroServiceProvider } from '../heroes/hero.service.provider';

  import { Logger } from '../logger.service';
  import { UserService } from '../user.service';

  const template = \`{{ log }}\`;

  @Component({
    selector: 'app-provider-1',
    template: template,
    providers: [ Logger ]
  })
  export class Provider1Component {
    log: string;
    constructor(logger: Logger) {
      logger.log('hi from logger provided with logger class');
      this.log = logger.logs[0];
    }
  }

  ////////////////////////////////////////////////////////////

  @Component({
    selector: 'app-provider-3',
    template: template,
    providers: [ { provide: Logger, useClass: Logger } ]
  })
  export class Provider3Component {
    log: string;
    constructor(logger: Logger) {
      logger.log('hi from logger provided with useClass: Logger');
      this.log = logger.logs[0];
    }
  }

  ////////////////////////////////////////////////////////////
  export class BetterLogger extends Logger { }

  @Component({
    selector: 'app-provider-4',
    template: template,
    providers: [ { provide: Logger, useClass: BetterLogger } ]
  })
  export class Provider4Component {
    log: string;
    constructor(logger: Logger) {
      logger.log('hi from logger provided with useClass: BetterLogger');
      this.log = logger.logs[0];
    }
  }

  ////////////////////////////////////////////////////////////

  @Injectable()
  export class EvenBetterLogger extends Logger {
    constructor(private userService: UserService) { super(); }

    log(message: string): void {
      const name = this.userService.user.name;
      super.log(\`Message to \${name}: \${message}\`);
    }

  }

  @Component({
    selector: 'app-provider-5',
    template: template,
    providers: [ UserService, { provide: Logger, useClass: EvenBetterLogger } ]
  })
  export class Provider5Component {
    log: string;
    constructor(logger: Logger) {
      logger.log('hi from EvenBetter logger');
      this.log = logger.logs[0];
    }
  }

  ////////////////////////////////////////////////////////////

  export class NewLogger extends Logger { }

  export class OldLogger {
    logs: string[] = [];
    log(message: string): void {
      throw new Error('Should not call the old logger!');
    }
  }

  @Component({
    selector: 'app-provider-6a',
    template: template,
    providers: [ NewLogger, { provide: OldLogger, useClass: NewLogger } ]
  })
  export class Provider6aComponent {
    log: string;
    constructor(newLogger: NewLogger, oldLogger: OldLogger) {
      if (newLogger === oldLogger) {
        throw new Error('expected the two loggers to be different instances.');
      }
      oldLogger.log('hi oldlogger (but we want newlogger)');
      this.log = newLogger.logs[0] || oldLogger.logs[0];
    }
  }

  ////////////////////////////////////////////////////////////

  @Component({
    selector: 'app-provider-6b',
    template: template,
    providers: [ NewLogger, { provide: OldLogger, useExisting: NewLogger } ]
  })
  export class Provider6bComponent {
    log: string;
    constructor(newLogger: NewLogger, oldLogger: OldLogger) {
      if (newLogger !== oldLogger) {
        throw new Error('expected the tow loggers to be the same instance');
      }
      oldLogger.log('hi from newlogger (via aliased oldlogger)');
      this.log = newLogger.logs[0];
    }
  }

  ////////////////////////////////////////////////////////////

  export function SilentLoggerFn() { }

  const silentLogger = {
    logs: ['Silent logger says "shhhhhh!", provided with "usevalue"'],
    log: SilentLoggerFn
  };

  @Component({
    selector: 'app-provider-7',
    template: template,
    providers: [ { provide: Logger, useValue: silentLogger } ]
  })
  export class Provider7Component {
    log: string;
    constructor(logger: Logger) {
      logger.log('hi from logger provided with usevalue');
      this.log = logger.logs[0];
    }
  }

  ////////////////////////////////////////////////////////////

  @Component({
    selector: 'app-provider-8',
    template: template,
    providers: [ heroServiceProvider, Logger, UserService ]
  })
  export class Provider8Component {
    log = 'hero service injected successfully via heroserviceprovider';
    constructor(heroService: HeroService) { }
  }

  ////////////////////////////////////////////////////////////

  @Component({
    selector: 'app-provider-9',
    template: template,
    providers: [ { provide: APP_CONFIG, useValue: HERO_DI_CONFIG } ]
  })
  export class Provider9Component implements OnInit {
    log: string;
    constructor(@Inject(APP_CONFIG) private config: AppConfig ) { }

    ngOnInit() {
      this.log = 'app-config application title is ' + this.config.title;
    }
  }

  ////////////////////////////////////////////////////////////

  import { Optional } from '@angular/core';

  const some_message = 'hi from injected logger';

  @Component({
    selector: 'app-provider-10',
    template: template,
    providers: [ { provide: Logger, useValue: null } ]
  })
  export class Provider10Component implements OnInit {
    log: string;
    constructor( @Optional() private logger: Logger) {
      if (this.logger) {
        this.logger.log(some_message);
      }
    }

    ngOnInit() {
      this.log = this.logger ? this.logger.logs[0] : 'Optional logger was not available';
    }


  }

  ////////////////////////////////////////////////////////////

  @Component({
    selector: 'app-providers',
    template: \`
      <h2>Provider Variations</h2>
      <div id="p1"><app-provider-1></app-provider-1></div>
      <div id="p3"><app-provider-3></app-provider-3></div>
      <div id="p4"><app-provider-4></app-provider-4></div>
      <div id="p5"><app-provider-5></app-provider-5></div>
      <div id="p6a"><app-provider-6a></app-provider-6a></div>
      <div id="p6b"><app-provider-6b></app-provider-6b></div>
      <div id="p7"><app-provider-7></app-provider-7></div>
      <div id="p8"><app-provider-8></app-provider-8></div>
      <div id="p9"><app-provider-9></app-provider-9></div>
      <div id="p10"><app-provider-10></app-provider-10></div>
    \`
  })
  export class ProvidersComponent { }


  `
};
diProvidersModule = {
  name: 'Providers Module',
  code: `

  import { NgModule } from '@angular/core';

  import {
    Provider1Component,
    Provider3Component,
    Provider4Component,
    Provider5Component,
    Provider6aComponent,
    Provider6bComponent,
    Provider7Component,
    Provider8Component,
    Provider9Component,
    Provider10Component,
    ProvidersComponent
  } from './providers.component';

  @NgModule({
    declarations: [
          Provider1Component,
          Provider3Component,
          Provider4Component,
          Provider5Component,
          Provider6aComponent,
          Provider6bComponent,
          Provider7Component,
          Provider8Component,
          Provider9Component,
          Provider10Component,
          ProvidersComponent
    ],
    exports: [ ProvidersComponent ]
  })
  export class ProvidersModule { }


  `
};
diAppModule = {
  name: 'App Module',
  code: `

  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';

  import { ProvidersModule } from './providers/providers.module';

  import { AppComponent } from './app.component';
  import { APP_CONFIG, HERO_DI_CONFIG } from './app.config';
  import { HeroListComponent } from './heroes/hero-list.component';
  import { HeroesComponent } from './heroes/heroes.component';
  import { CarComponent } from './car/car.component';
  import { InjectorComponent } from './injector/injector.component';
  import { TestComponent } from './test/test.component';

  import { Logger } from './logger.service';
  import { UserService } from './user.service';



  @NgModule({
    declarations: [
      AppComponent,
      HeroListComponent,
      HeroesComponent,
      CarComponent,
      InjectorComponent,
      TestComponent
    ],
    imports: [
      BrowserModule,
      ProvidersModule
    ],
    providers: [ Logger, UserService, { provide: APP_CONFIG, useValue: HERO_DI_CONFIG} ],
    bootstrap: [ AppComponent ]
  })
  export class AppModule { }


  `
};
diAppComponent = {
  name: 'App Component',
  code: `

  import { Component, Inject } from '@angular/core';

  import { AppConfig } from './app-config';
  import { APP_CONFIG } from './app.config';
  import { UserService } from './user.service';

  @Component({
    selector: 'app-root',
    template: \`
            <h1>{{ title }}</h1>
            <app-car></app-car>
            <app-injectors><app-injectors>
            <app-tests><app-tests>
            <h2>User</h2>
            <p id="user">
            {{ userInfo }}
              <button (click)="nextUser()">Next User</button>
            </p>

            <app-heroes id="authorized" *ngIf="isAuthorized"></app-heroes>
            <app-heroes id="unauthorized" *ngIf="!isAuthorized"></app-heroes>
            <app-providers></app-providers>

    \`
  })
  export class AppComponent {
   title: string;

    constructor(@Inject(APP_CONFIG) config: AppConfig, private userService: UserService) {
            this.title = config.title;
    }

    get isAuthorized() {
      return this.user.isAuthorized;
    }

    nextUser() {
      this.userService.getNewUser();
    }

    get user() {
      return this.userService.user;
    }

    get userInfo() {
      return \`Current user, \${this.user.name}, is \` +
      \`\${this.isAuthorized ? '' : 'not'} authorized. \`;
    }


  }

  `
};
httpClientInMemoryDataService = {
  name: 'In Memory Data Service',
  code: `
  import { InMemoryDbService } from 'angular-in-memory-web-api';

  export class InMemoryDataService implements InMemoryDbService {
    createDb() {
      const heroes = [
        { id: 11, name: 'Odin' },
        { id: 12, name: 'Thor' },
        { id: 13, name: 'Tyr' },
        { id: 14, name: 'Frigg' },
        { id: 15, name: 'Freyja' },
        { id: 16, name: 'Loki' },
        { id: 17, name: 'Baldur' },
        { id: 18, name: 'Mani' }
      ];
      return { heroes };
    }

  }


  `
};
httpClientHeroesService = {
  name: 'Heroes Service',
  code: `

  import { Injectable } from '@angular/core';
  import { HttpClient, HttpParams } from '@angular/common/http';
  import { HttpHeaders } from '@angular/common/http';

  import { Hero } from './hero';
  import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

  import { Observable } from 'rxjs/Observable';
  import { of } from 'rxjs/observable/of';
  import { catchError } from 'rxjs/operators';

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'applications/json'
    })
  };

  @Injectable()
  export class HeroesService {
    heroesUrl = 'api/heroes';
    private handleError: HandleError;

    constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
      this.handleError = httpErrorHandler.createHandleError('HeroesService');
    }

    getHeroes(): Observable<Hero[]> {
      return this.http.get<Hero[]>(this.heroesUrl)
                      .pipe(catchError(this.handleError('getHeroes', [])));
    }

    searchHeroes(term: string): Observable<Hero[]> {
      term = term.trim();

      const options = term ? { params: new HttpParams().set('name', term) } : {};
      return this.http.get<Hero[]>(this.heroesUrl, options)
                      .pipe(catchError(this.handleError('searchHeroes', [])));
    }


    addHero(hero: Hero): Observable<Hero> {
      return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
                      .pipe(
                        catchError(this.handleError('addHero', hero))
                      );
    }

    deleteHero(id: number): Observable<{}> {
      const url = \`\${this.heroesUrl}/\${id}\`;
      return this.http.delete(url, httpOptions)
                      .pipe(
                        catchError(this.handleError('deleteHero'))
                      );
    }

    updateHero(hero: Hero): Observable<Hero> {
      httpOptions.headers = httpOptions.headers.set('Authorization', 'my-new-auth-token');
      return this.http.put<Hero>(this.heroesUrl, hero, httpOptions)
                      .pipe(catchError(this.handleError('updateHero', hero))
            );
    }


  }


  `
};
httpClientHeroesComponent = {
  name: 'Heroes Component',
  code: `
  import { Component, OnInit, OnDestroy } from '@angular/core';

  import { Hero } from './hero';
  import { HeroesService } from './heroes.service';

  import { Subscription } from 'rxjs/Subscription';

  @Component({
    selector: 'app-heroes',
    template: \`
              <h3>Heroes</h3>
              <div>
                  <label>Hero name:
                        <input #heroName>
                  </label>
                  <button (click)="add(heroName.value); heroName.value = '';">
                    Add
                  </button>
                  <button (click)="search(heroName.value)">
                    Search
                  </button>
              </div>

              <ul class="heroes">
                    <li *ngFor="let hero of heroes">
                          <a (click)="edit(hero)">
                              <span class="badge">{{ hero.id || -1}}</span>
                              <span *ngIf="hero !== editHero">{{ hero.name }}</span>
                              <input *ngIf="hero === editHero" [(ngModel)]="hero.name"
                              (blur)="update()" (keyup.enter)="update()">
                          </a>
                      <button class="delete" title="delete hero" (click)="delete(hero)">
                      x
                      </button>
                    </li>
              </ul>

    \`,
    providers: [ HeroesService ],
    styleUrls: ['./heroes.component.css']
  })
  export class HeroesComponent implements OnInit, OnDestroy {
      heroes: Hero[];
      editHero: Hero;
      heroesSubscription: Subscription;

      constructor(private heroesService: HeroesService) { }

      ngOnInit() {
        this.getHeroes();
      }

      getHeroes(): void {
        this.heroesSubscription = this.heroesService.getHeroes()
                                  .subscribe(heroes => this.heroes = heroes);
      }

      add(name: string): void {
        this.editHero = undefined;
        name = name.trim();
        if (!name) { return; }

        const newHero: Hero = { name } as Hero;
        this.heroesSubscription = this.heroesService.addHero(newHero)
                                  .subscribe(hero => this.heroes.push(hero));
      }

      delete(hero: Hero): void {
        this.heroes = this.heroes.filter(h => h !== hero);
        this.heroesSubscription = this.heroesService.deleteHero(hero.id).subscribe();
      }

      edit(hero) {
        this.editHero = hero;
      }

      search(searchTerm: string) {
        this.editHero = undefined;
        if (searchTerm) {
          this.heroesSubscription = this.heroesService.searchHeroes(searchTerm)
                            .subscribe(heroes => this.heroes = heroes);
        }
      }

      update() {
        if (this.editHero) {
          this.heroesSubscription =
          this.heroesService.updateHero(this.editHero).subscribe(hero => {
                const ix = hero ? this.heroes.findIndex(h => h.id === hero.id) : -1;
                if (ix > -1) { this.heroes[ix] = hero; }

          });
          this.editHero = undefined;
        }
      }

      ngOnDestroy() {
        this.heroesSubscription.unsubscribe();
      }

  }


  `
};
httpClientHeroesComponentCSS = {
  name: 'Heroes Component CSS',
  code: `
  /* HeroesComponent's private CSS styles */

  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    position: relative;
    cursor: pointer;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
    width: 19em;
  }

  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }

  .heroes a {
    color: #888;
    text-decoration: none;
    position: relative;
    display: block;
    width: 250px;
  }

  .heroes a:hover {
    color:#607D8B;
  }

  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    min-width: 16px;
    text-align: right;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }

  .button {
    background-color: #eee;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    cursor: hand;
    font-family: Arial;
  }

  button:hover {
    background-color: #cfd8dc;
  }

  button.delete {
    position: relative;
    left: 24em;
    top: -32px;
    background-color: gray !important;
    color: white;
    display: inherit;
    padding: 5px 8px;
    width: 2em;
  }

  input {
    font-size: 100%;
    margin-bottom: 2px;
    width: 11em;
  }

  .heroes input {
    position: relative;
    top: -3px;
    width: 12em;
  }


  /*
  Copyright 2017-2018 Google Inc. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at http://angular.io/license
  */

  `
};
httpClientMessageService = {
  name: 'Message Service',
  code: `

  import { Injectable } from '@angular/core';


  @Injectable()
  export class MessageService {
    messages: string[] = []; // empty

    add(message: string) {
      this.messages.push(message);
    }

    clear() {
      this.messages = [];
    }

  }

  `
};
httpClientMessageComponent = {
  name: 'Message Component',
  code: `

  import { Component } from '@angular/core';
  import { MessageService } from '../message.service';

  @Component({
    selector: 'app-messages',
    template: \`
        <div *ngIf="messageService.messages.length">
                <h3>Messages</h3>
                <button class="clear" (click)="messageService.clear()">clear</button>
                <br>
                <ol>
                  <li *ngFor="let message of messageService.messages">{{ message }}</li>
                </ol>
        </div>
    \`
  })
  export class MessagesComponent {

    constructor(public messageService: MessageService) { }

  }

  `
};
httpClientAssetsConfigJSON = {
  name: 'Assets/Config.JSON',
  code: `

  {
    "heroesUrl": "api/heroes",
    "textfile": "assets/textfile.txt"
  }

  `
};
httpClientAssetsTextFile = {
  name: 'Assets/TextFile.TXT',
  code: `

  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <title>ng5-http-client</title>
    <base href="/">

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
  </head>
  <body>
    <app-root></app-root>
  </body>
  </html>

  `
};
httpClientConfigService = {
  name: 'Config Service',
  code: `

  import { Injectable } from '@angular/core';
  import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

  import { Observable } from 'rxjs/Observable';
  import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
  import { catchError, retry } from 'rxjs/operators';

  export interface Config {
    heroesUrl: string;
    textfile: string;
  }

  @Injectable()
  export class ConfigService {
    configUrl = 'assets/config.json';

    constructor(private http: HttpClient) { }

    getConfig() {
      return this.http.get<Config>(this.configUrl)
                      .pipe(
                        retry(3),
                        catchError(this.handleError)
                      );
    }

    getConfig_1() {
      return this.http.get(this.configUrl);
    }

    getConfig_2() {
      return this.http.get<Config>(this.configUrl);
    }

    getConfig_3() {
      return this.http.get<Config>(this.configUrl)
                      .pipe(
                        catchError(this.handleError)
                      );
    }

    getConfigResponse(): Observable<HttpResponse<Config>> {
      return this.http.get<Config>(
              this.configUrl, { observe: 'response'}
      );
    }

    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        console.error('An error occured:', error.error.message);
      } else {
        console.error(
          \`Backend returned code \${error.status}, \` +
          \`body was \${error.error}\`
        );
      }
      return new ErrorObservable('Something bad happened; please try again later.');
    }

    makeIntentionalError() {
      return this.http.get('not/a/real/url')
                       .pipe(
                         catchError(this.handleError)
                       );
    }

  }

  `
};
httpClientConfigComponent = {
  name: 'Config Component',
  code: `

  import { Component, OnDestroy } from '@angular/core';

  import { ConfigService, Config } from './config.service';
  import { MessageService } from '../message.service';

  import { Subscription } from 'rxjs/Subscription';

  @Component({
    selector: 'app-config',
    template: \`
        <h3>Get configuration from JSON file</h3>
        <div>
                <button (click)="clear(); showConfig();">get</button>
                <button (click)="clear(); showConfigResponse()">getResponse</button>
                <button (click)="clear();">clear</button>
                <button (click)="clear(); makeError();">error</button>
              <span *ngIf="config">
                        <p>Heroes API URL is "{{ config.heroesUrl }}"</p>
                        <p>Textfile URL is "{{ config.textfile }}"</p>
                <div *ngIf="headers">
                    Response headers:
                    <ul>
                        <li *ngFor="let header of headers">{{ header }}</li>
                    </ul>
                </div>
              </span>
        </div>
        <p *ngIf="error" class="error">{{ error | json }}</p>
    \`,
    providers: [ ConfigService ],
    styles: ['.error { color: red; }']
  })
  export class ConfigComponent implements OnDestroy {
    error: any;
    headers: string[];
    config: Config;
    configSubscription: Subscription;

    constructor(private configService: ConfigService) { }

    clear() {
      this.config = undefined;
      this.error = undefined;
      this.headers = undefined;
    }

    showConfig() {
      this.configSubscription = this.configService.getConfig().subscribe(
                    data => this.config = { ...data },
                    error => this.error = error
      );
    }


    showConfig_v1() {
      this.configSubscription = this.configService.getConfig_1()
                                .subscribe(data => this.config = {
              heroesUrl: data['heroesUrl'],
              textfile: data['textfile']
      });
    }

    showConfig_v2() {
      this.configSubscription = this.configService.getConfig()
                                .subscribe(data => this.config = { ...data });
    }

    showConfigResponse() {
      this.configSubscription = this.configService.getConfigResponse()
          .subscribe(response => {
              const keys = response.headers.keys();
              this.headers = keys.map(key => \`\${key}: \${response.headers.get(key)}\`);
              this.config = { ...response.body };
          });
    }

    makeError() {
      this.configSubscription =
      this.configService.makeIntentionalError().subscribe(null, error => this.error = error);
    }

    ngOnDestroy() {
      this.configSubscription.unsubscribe();
    }

  }

  `
};
httpClientDownloaderService = {
  name: 'Downloader Service',
  code: `

  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';

  import { MessageService } from '../message.service';

  import { tap } from 'rxjs/operators';

  @Injectable()
  export class DownloaderService {

    constructor(private http: HttpClient,
                private messageService: MessageService) { }

    getTextFile(filename: string) {
      return this.http.get(filename, { responseType: 'text'})
                      .pipe(
                        tap(
                            data => this.log(filename, data),
                            error => this.logError(filename, error)
                        )
                      );
    }

    private log(filename: string, data: string) {
      const message = \`DownloaderService downloaded: \${filename} and got "\${data}".\`;
      this.messageService.add(message);
    }

    private logError(filename: string, error: any) {
      const message = \`DownloaderService failed to download: \${filename}; and got error
      "\${error.message}".\`;
      console.error(message);
      this.messageService.add(message);
    }

  }

  `
};
httpClientDownloaderComponent = {
  name: 'Downloader Component',
  code: `

  import { Component, OnDestroy } from '@angular/core';

  import { DownloaderService } from './downloader.service';

  import { Subscription } from 'rxjs/Subscription';

  @Component({
    selector: 'app-downloader',
    template: \`
          <h3>Download the texfile</h3>
          <button (click)="download()">download</button>
          <button (click)="clear()">clear</button>
          <p *ngIf="contents">Contents: "{{ contents }}"</p>
    \`,
    providers: [ DownloaderService ]
  })
  export class DownloaderComponent implements OnDestroy {
    contents: string;
    downloaderSubscription: Subscription;

    constructor(private downloaderService: DownloaderService) { }

    clear() {
      this.contents = undefined;
    }

    download() {
     this.downloaderSubscription = this.downloaderService.getTextFile('assets/textfile.txt')
                            .subscribe(results => this.contents = results);
    }

    ngOnDestroy() {
      this.downloaderSubscription.unsubscribe();
    }

  }

  `
};
httpClientUploaderService = {
  name: 'Uploader Service',
  code: `
  import { Injectable } from '@angular/core';
  import { HttpClient, HttpEvent, HttpEventType, HttpProgressEvent,
           HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';

  import { MessageService } from '../message.service';

  import { of } from 'rxjs/observable/of';
  import { catchError, last, map, tap } from 'rxjs/operators';

  @Injectable()
  export class UploaderService {

    constructor(private http: HttpClient,
                private messageService: MessageService) { }

    upload(file: File) {
      if (!file) { return; }

      const req = new HttpRequest('POST', '/upload/file', file, {
            reportProgress: true
      });

      return this.http.request(req).pipe(
        map(event => this.getEventMessage(event, file)),
        tap(message => this.showProgress(message)),
        last(),
        catchError(this.handleError(file))
      );
    }

    private getEventMessage(event: HttpEvent<any>, file: File) {
        switch (event.type) {
          case HttpEventType.Sent:
            return \`Uploading file "\${file.name}" of size \${file.size}\`;
          case HttpEventType.UploadProgress:
          const percentDone = Math.round(100 * event.loaded / event.total);
            return \`File "\${file.name}" is \${percentDone}% uploaded.\`;
          case HttpEventType.Response:
            return \`File "\${file.name}" was completely uploaded.\`;
          default:
            return \`File "\${file.name}" surprising upload event: \${event.type}\`;
        }
    }

    private handleError(file: File) {
      const userMessage = \`\${file.name} upload failed\`;
      return (error: HttpErrorResponse) => {
        console.error(error);
        const message = (error.error instanceof Error) ?
              error.error.message : \`server returned code \${error.status}
              with body "\${error.error}"\`;
        this.messageService.add(\`\${userMessage} \${message}\`);
        return of(userMessage);
      };
    }

    private showProgress(message: string) {
      this.messageService.add(message);
    }

  }


  `
};
httpClientUploaderComponent = {
  name: 'Uploader Component',
  code: `

  import { Component, OnDestroy } from '@angular/core';

  import { UploaderService } from './uploader.service';

  import { Subscription } from 'rxjs/Subscription';

  @Component({
    selector: 'app-uploader',
    template: \`
        <h3>Upload File</h3>
        <form enctype="multipart/form-data" method="post">
        <div>
        <label for="picked">Choose file to upload</label>
          <div>
              <input type="file"
                   id="picked"
                   #picked
                   (click)="message=''"
                   (change)="onPicked(picked)">
          </div>
        </div>
        <p *ngIf="message">{{ message }}</p>
        </form>

    \`,
    providers: [ UploaderService ]
  })
  export class UploaderComponent implements OnDestroy {
    message: string;
    uploaderSubscription: Subscription;

    constructor(private uploaderService: UploaderService) { }

    onPicked(input: HTMLInputElement) {
      const file = input.files[0];
      if (file) {
        this.uploaderSubscription = this.uploaderService.upload(file).subscribe(
          msg => {
            input.value = null;
            this.message = msg;
          }
        );
      }
    }

    ngOnDestroy() {
      this.uploaderSubscription.unsubscribe();
    }

  }

  `
};
httpClientPackageSearchService = {
  name: 'Package Search Service',
  code: `

  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

  import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

  import { Observable } from 'rxjs/Observable';
  import { of } from 'rxjs/observable/of';
  import { catchError, map } from 'rxjs/operators';

  export interface NpmPackageInfo {
    name: string;
    version: string;
    description: string;
  }

  export const searchUrl = 'https://npmsearch.com/query';

  const httpOptions = {
    headers: new HttpHeaders({
      'x-refresh': 'true'
    })
  };

  function createHttpOptions(packageName: string, refresh = false) {
    const params = new HttpParams({ fromObject: { q: packageName} });
    const headerMap = refresh ? {'x-refresh': 'true'} : {};
    const headers = new HttpHeaders(headerMap);
    return { headers, params };
  }

  @Injectable()
  export class PackageSearchService {
    private handleError: HandleError;

    constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
      this.handleError = httpErrorHandler.createHandleError('HeroesService');
    }

    search(packageName: string, refresh = false): Observable<NpmPackageInfo[]> {
      if (!packageName.trim()) {
        return of([]);
      }

      const options = createHttpOptions(packageName, refresh);

      return this.http.get(searchUrl, options).pipe(
        map((data: any) => {
          return data.results.map(entry => ({
            name: entry.name[0],
            version: entry.version[0],
            description: entry.description[0]
          } as NpmPackageInfo));
        }), catchError(this.handleError('search', []))
      );
    }

  }


  `
};
httpClientPackageSearchComponent = {
  name: 'Package Search Component',
  code: `

  import { Component, OnInit } from '@angular/core';

  import { PackageSearchService, NpmPackageInfo } from './package-search.service';

  import { Observable } from 'rxjs/Observable';
  import { Subject } from 'rxjs/Subject';
  import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

  @Component({
    selector: 'app-package-search',
    template: \`
            <h3>Search Npm Package</h3>
            <p><i>Searches when typing stops. Caches for 30 seconds.</i></p>
            <input (keyup)="search($event.target.value)" id="name" placeholder="Search">
            <input type="checkbox" id="refresh" [checked]="withRefresh"
            (click)="toggleRefresh()">
            <label for="refresh">with refresh</label>

            <ul>
                  <li *ngFor="let package of packages$ | async">
                        <b>{{ package.name }} v.{{ package.version }}</b> -
                        <i>{{ package.description }}</i>
                  </li>
            </ul>

    \`,
    providers: [ PackageSearchService ]
  })
  export class PackageSearchComponent implements OnInit {
    withRefresh = false;
    packages$: Observable<NpmPackageInfo[]>;
    private searchText$ = new Subject<string>();

    search(packageName: string) {
      this.searchText$.next(packageName);
    }

    constructor(private packageSearchService: PackageSearchService) { }

    ngOnInit() {
      this.packages$ = this.searchText$.pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(packageName =>
          this.packageSearchService.search(packageName, this.withRefresh))
        );
    }

    toggleRefresh() {
      this.withRefresh = !this.withRefresh;
    }

  }


  `
};
httpClientAuthService = {
  name: 'Auth Service',
  code: `

  import { Injectable } from '@angular/core';

  @Injectable()
  export class AuthService {
    getAuthorizationToken() {
      return 'some-auth-token';
    }

  }

  `
};
httpClientErrorHandlerService = {
  name: 'HTTP Error Handler Service',
  code: `

  import { Injectable } from '@angular/core';
  import { HttpErrorResponse } from '@angular/common/http';

  import { MessageService } from './message.service';

  import { Observable } from 'rxjs/Observable';
  import { of } from 'rxjs/observable/of';

  export type HandleError =
    <T> (operation?: string, result?: T) => (error: HttpErrorResponse) => Observable<T>;

    @Injectable()
    export class HttpErrorHandler {
      constructor (private messageService: MessageService) { }

      createHandleError = (serviceName = '') => <T>
          (operation = 'operation', result = {} as T) =>
                     this.handleError(serviceName, operation, result)

     handleError<T> (serviceName = '', operation = 'operation', result = {} as T) {
       return (error: HttpErrorResponse): Observable<T> => {
         console.error(error);

        const message = (error.error instanceof ErrorEvent) ? error.error.message :
        \`server returned a code of \${error.status} with body "\${error.error}"\`;

        this.messageService.add(\`\${serviceName}: \${operation} failed: \${message}\`);
        return of (result);
       };
     }

    }

  `
};
httpClientRequestCacheService = {
  name: 'Request Cache Service',
  code: `

  import { Injectable } from '@angular/core';
  import { HttpRequest, HttpResponse } from '@angular/common/http';

  import { MessageService } from './message.service';

  export interface RequestCacheEntry {
    url: string;
    response: HttpResponse<any>;
    lastRead: number;
  }

  export abstract class RequestCache {
    abstract get(request: HttpRequest<any>): HttpResponse<any> | undefined;
    abstract put(request: HttpRequest<any>, response: HttpResponse<any>): void;
  }

  const maxAge = 30000;

  @Injectable()
  export class RequestCacheWithMap implements RequestCache {

    cache = new Map<string, RequestCacheEntry>();

    constructor(private messageService: MessageService) { }


    get(request: HttpRequest<any>): HttpResponse<any> | undefined {
      const url = request.urlWithParams;
      const cached = this.cache.get(url);

      if (!cached) {
        return undefined;
      }

      const isExpired = cached.lastRead < (Date.now() - maxAge);
      const expired = isExpired ? 'expired' : '';
      this.messageService.add(\`Found \${expired}cached response for "\${url}".\`);
      return isExpired ? undefined : cached.response;
    }

    put(request: HttpRequest<any>, response: HttpResponse<any>): void {
      const url = request.urlWithParams;
      this.messageService.add(\`Caching response from "\${url}".\`);

      const entry = { url, response, lastRead: Date.now() };
      this.cache.set(url, entry);

      const expired = Date.now() - maxAge;
      this.cache.forEach(item => {
        if (item.lastRead < expired) {
          this.cache.delete(item.url);
        }
      });

      this.messageService.add(\`Request cache size: \${this.cache.size}.\`);

    }


  }


  `
};
httpClientAuthInterceptor = {
  name: 'Auth Interceptor',
  code: `

  import { Injectable } from '@angular/core';
  import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

  import { AuthService } from '../auth.service';

  @Injectable()
  export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler) {
      const authToken = this.authService.getAuthorizationToken();
      const authRequest = request.clone({ setHeaders: { Authorization: authToken } });
      return next.handle(authRequest);
    }

  }

  `
};
httpClientCachingInterceptor = {
  name: 'Caching Interceptor',
  code: `

  import { Injectable } from '@angular/core';
  import { HttpEvent, HttpHeaders, HttpRequest,
           HttpResponse, HttpInterceptor, HttpHandler } from '@angular/common/http';

  import { RequestCache } from '../request-cache.service';
  import { searchUrl } from '../package-search/package-search.service';

  import { Observable } from 'rxjs/Observable';
  import { of } from 'rxjs/observable/of';
  import { startWith, tap } from 'rxjs/operators';

  @Injectable()
  export class CachingInterceptor implements HttpInterceptor {

          constructor(private cache: RequestCache) {}

          intercept(request: HttpRequest<any>, next: HttpHandler) {

            if (!isCachable(request)) {
              return next.handle(request);
            }

            const cachedResponse = this.cache.get(request);
            if (request.headers.get('x-refresh')) {
              const results$ = sendRequest(request, next, this.cache);
              return cachedResponse ? results$.pipe(startWith(cachedResponse)) : results$;
            }
            return cachedResponse ? of(cachedResponse) :
            sendRequest(request, next, this.cache);
          }


  }

  function isCachable(request: HttpRequest<any>) {
    return request.method === 'GET' &&
           request.url.indexOf(searchUrl) > -1;
  }

  function sendRequest(request: HttpRequest<any>,
                       next: HttpHandler,
                       cache: RequestCache): Observable<HttpEvent<any>> {
    const noHeadersRequest = request.clone({ headers: new HttpHeaders() });
    return next.handle(noHeadersRequest).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          cache.put(request, event);
        }
      })
    );

  }

  `
};
httpClientEnsureHttpsInterceptor = {
  name: 'Ensure HTTPS Interceptor',
  code: `

  import { Injectable } from '@angular/core';
  import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

  import { Observable } from 'rxjs/Observable';


  @Injectable()
  export class EnsureHttpsInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const secureRequest = request.clone({
        url: request.url.replace('http://', 'https://')
      });
      return next.handle(secureRequest);
    }

  }


  `
};
httpClientLoggingInterceptor = {
  name: 'Logging Interceptor',
  code: `

  import { Injectable } from '@angular/core';

  import { HttpEvent, HttpInterceptor, HttpHandler,
           HttpRequest, HttpResponse } from '@angular/common/http';

  import { MessageService } from '../message.service';

  import { Observable } from 'rxjs/Observable';
  import { finalize, tap } from 'rxjs/operators';

  @Injectable()
  export class LoggingInterceptor implements HttpInterceptor {

    constructor(private messageService: MessageService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler) {
      const started = Date.now();
      let ok: string;

      return next.handle(request)
                 .pipe(
                   tap(
                     event => ok = event instanceof HttpResponse ? 'succeeded' : '',
                     error => ok = 'failed'
                   ),
                   finalize(() => {
                     const elapsed = Date.now() - started;
                     const message = \`\${request.method} "\${request.urlWithParams}"
                                      \${ok} in \${elapsed} ms.\`;
                     this.messageService.add(message);
                   })
                 );
    }

  }


  `
};
httpClientNoopInterceptor = {
  name: 'NOOP Interceptor',
  code: `

  import { Injectable } from '@angular/core';
  import { HttpEvent, HttpInterceptor,
           HttpHandler, HttpRequest } from '@angular/common/http';

  import { Observable } from 'rxjs/Observable';

  @Injectable()
  export class NoopInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request);
    }

  }

  `
};
httpClientTrimNameInterceptor = {
  name: 'Trim Name Interceptor',
  code: `
  import { Injectable } from '@angular/core';
  import { HttpEvent, HttpInterceptor,
           HttpHandler, HttpRequest } from '@angular/common/http';

  import { Observable } from 'rxjs/Observable';

  @Injectable()
  export class TrimNameInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
          const body = request.body;
          if (!body || !body.name) {
            return next.handle(request);
          }
          const newBody = { ...body, name: body.name.trim() };
          const newRequest = request.clone({ body: newBody });

          return next.handle(newRequest);
    }

  }

  `
};
httpClientUploadInterceptor = {
  name: 'Upload Interceptor',
  code: `

  import { Injectable } from '@angular/core';
  import { HttpEvent, HttpInterceptor, HttpHandler,
           HttpResponse, HttpRequest, HttpEventType,
           HttpProgressEvent } from '@angular/common/http';

  import { Observable } from 'rxjs/Observable';
  import { of } from 'rxjs/observable/of';

  @Injectable()
  export class UploadInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if (request.url.indexOf('/upload/file') === -1) {
        return next.handle(request);
      }
        const delay = 300;
        return createUploadEvents(delay);
    }

  }

  function createUploadEvents(delay: number) {
    const chunks = 5;
    const total = 12345678;
    const chunkSize = Math.ceil(total / chunks);

    return new Observable<HttpEvent<any>>(observer => {
      observer.next({ type: HttpEventType.Sent });
      uploadLoop(0);

      function uploadLoop(loaded: number) {
        setTimeout(() => {
          loaded += chunkSize;
          if (loaded >= total) {
            const doneResponse = new HttpResponse({
              status: 201
            });
            observer.next(doneResponse);
            observer.complete();
            return;
          }

          const progressEvent: HttpProgressEvent = {
            type: HttpEventType.UploadProgress,
            loaded,
            total
          };
          observer.next(progressEvent);
          uploadLoop(loaded);
        }, delay);
      }
    });

  }

  `
};
httpClientGlobalStyles = {
  name: 'Global CSS Styles',
  code: `

  /* Master Styles */
  h1 {
    color: #369;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 250%;
  }
  h2, h3 {
    color: #444;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: lighter;
  }
  body {
    margin: 2em;
  }
  body, input[text], button {
    color: #888;
    font-family: Cambria, Georgia;
  }
  a {
    cursor: pointer;
    cursor: hand;
  }
  button {
    font-family: Arial;
    background-color: #eee;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    cursor: hand;
  }
  button:hover {
    background-color: #cfd8dc;
  }
  button:disabled {
    background-color: #eee;
    color: #aaa;
    cursor: auto;
  }

  /* Navigation link styles */
  nav a {
    padding: 5px 10px;
    text-decoration: none;
    margin-right: 10px;
    margin-top: 10px;
    display: inline-block;
    background-color: #eee;
    border-radius: 4px;
  }
  nav a:visited, a:link {
    color: #607D8B;
  }
  nav a:hover {
    color: #039be5;
    background-color: #CFD8DC;
  }
  nav a.active {
    color: #039be5;
  }

  /* everywhere else */
  * {
    font-family: Arial, Helvetica, sans-serif;
  }

  /*
  Copyright 2017-2018 Google Inc. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at http://angular.io/license
  */

  `
};
httpClientAppModule = {
  name: 'App Module',
  code: `

  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { FormsModule } from '@angular/forms';
  import { HttpClientModule } from '@angular/common/http';
  import { HttpClientXsrfModule } from '@angular/common/http';

  import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
  import { InMemoryDataService } from './in-memory-data.service';

  import { AppComponent } from './app.component';
  import { HeroesComponent } from './heroes/heroes.component';
  import { ConfigComponent } from './config/config.component';
  import { MessagesComponent } from './messages/messages.component';
  import { DownloaderComponent } from './downloader/downloader.component';
  import { UploaderComponent } from './uploader/uploader.component';
  import { PackageSearchComponent } from './package-search/package-search.component';

  import { MessageService } from './message.service';
  import { HttpErrorHandler } from './http-error-handler.service';
  import { AuthService } from './auth.service';
  import { RequestCache, RequestCacheWithMap } from './request-cache.service';

  import { httpInterceptorProviders } from './http-interceptors';

  @NgModule({
    declarations: [
      AppComponent,
      HeroesComponent,
      ConfigComponent,
      MessagesComponent,
      DownloaderComponent,
      UploaderComponent,
      PackageSearchComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      HttpClientXsrfModule.withOptions({
        cookieName: 'My-Xsrf-Cookie',
        headerName: 'My-Xsrf-Header'
      }),
      HttpClientInMemoryWebApiModule.forRoot(
          InMemoryDataService, {
          dataEncapsulation: false,
          passThruUnknownUrl: true,
          put204: false
        }
      )
    ],
    providers: [
          AuthService,
          HttpErrorHandler,
          MessageService,
          { provide: RequestCache, useClass: RequestCacheWithMap },
          httpInterceptorProviders
        ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }

  `
};
httpClientAppComponent = {
  name: 'App Component',
  code: `

  import { Component } from '@angular/core';

  @Component({
    selector: 'app-root',
    template: \`
          <h1>HTTPClient Code</h1>
          <div>
            <input type="checkbox" id="heroes" [checked]="showHeroes"
            (click)="toggleHeroes()">
            <label for="heroes">Heroes</label>
            <input type="checkbox" id="config" [checked]="showConfig"
            (click)="toggleConfig()">
            <label for="config">Config</label>
            <input type="checkbox" id="downloader" [checked]="showDownloader"
            (click)="toggleDownloader()">
            <label for="downloader">Downloader</label>
            <input type="checkbox" id="uploader" [checked]="showUploader"
            (click)="toggleUploader()">
            <label for="uploader">Uploader</label>
            <input type="checkbox" id="search" [checked]="showSearch"
            (click)="toggleSearch()">
            <label for="search">Search</label>

          </div>
          <app-heroes *ngIf="showHeroes"></app-heroes>
          <app-messages></app-messages>
          <app-config *ngIf="showConfig"></app-config>
          <app-downloader *ngIf="showDownloader"></app-downloader>
          <app-uploader *ngIf="showUploader"></app-uploader>
          <app-package-search *ngIf="showSearch"></app-package-search>

    \`
  })
  export class AppComponent {
          showHeroes = true;
          showConfig = true;
          showDownloader = true;
          showUploader = true;
          showSearch = true;

          toggleHeroes() {
            this.showHeroes = !this.showHeroes;
          }

          toggleConfig() {
            this.showConfig = !this.showConfig;
          }

          toggleDownloader() {
            this.showDownloader = !this.showDownloader;
          }

          toggleUploader() {
            this.showUploader = !this.showUploader;
          }

          toggleSearch() {
            this.showSearch = !this.showSearch;
          }

  }

  `
};
routingAppRoutingModule = {
  name: 'App Routing Module',
  code: `

  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';

  import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
  import { AuthGuard } from './auth-guard.service';
  import { CanDeactivateGuard } from './can-deactivate-guard.service';

  import { ComposeMessageComponent } from './compose-message/compose-message.component';
  import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

  const appRoutes: Routes = [
    {
      path: 'compose',
      component: ComposeMessageComponent,
      outlet: 'popup'
    },
    {
      path: 'admin',
      loadChildren: 'app/admin/admin.module#AdminModule',
      canLoad: [ AuthGuard ]
    },
    {
      path: 'crisis-center',
      loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule',
      data: { preload: true }
    },
    {
      path: '',
      redirectTo: '/superheroes',
      pathMatch: 'full'
    },
    {
      path: '**',
      component: PageNotFoundComponent
    }
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(appRoutes, {
        preloadingStrategy: SelectivePreloadingStrategy
      }) ],
    exports: [ RouterModule ],
    providers: [ SelectivePreloadingStrategy, CanDeactivateGuard ]
  })
  export class AppRoutingModule { }

  `
};
routingAppModule = {
  name: 'App Module',
  code: `

  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  import { FormsModule } from '@angular/forms';
  import { RouterModule, Routes } from '@angular/router';

  import { AppRoutingModule } from './app-routing.module';
  import { HeroesModule } from './heroes/heroes.module';
  import { LoginRoutingModule } from './login-routing.module';

  import { DialogService } from './dialog-service';

  import { AppComponent } from './app.component';
  import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
  import { ComposeMessageComponent } from './compose-message/compose-message.component';
  import { LoginComponent } from './login/login.component';

  @NgModule({
    declarations: [
      AppComponent,
      PageNotFoundComponent,
      ComposeMessageComponent,
      LoginComponent
    ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      HeroesModule,
      LoginRoutingModule,
      AppRoutingModule
    ],
    providers: [ DialogService ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }


  `
};
routingAppComponent = {
  name: 'App Component',
  code: `

  import { Component } from '@angular/core';

  @Component({
    selector: 'app-root',
    template: \`
            <h1 class="title">Angular Router</h1>
            <nav>
                  <a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
                  <a routerLink="/superheroes" routerLinkActive="active">Heroes</a>
                  <a routerLink="/admin" routerLinkActive="active">Admin</a>
                  <a routerLink="/login" routerLinkActive="active">Login</a>
                  <a [routerLink]="[{ outlets: { popup: ['compose'] } }]">Contact</a>
            </nav>
            <router-outlet></router-outlet>
            <router-outlet name="popup"></router-outlet>
    \`
  })
  export class AppComponent { }

  `
};
routingAnimations = {
  name: 'Animations',
  code: `

  import { animate, AnimationEntryMetadata, state,
    style, transition, trigger } from '@angular/core';

export const slideInDownAnimation: AnimationEntryMetadata =
 trigger('routeAnimation', [
   state('*',
     style({
       opacity: 1,
       transform: 'translateX(0)'
     })
   ),
   transition(':enter', [
     style({
       opacity: 0,
       transform: 'translateX(-100%)'
     }),
     animate('0.2s ease-in')
   ]),
   transition(':leave', [
     animate('0.5s ease-out', style({
       opacity: 0,
       transform: 'translateY(100%)'
     }))
   ])
]);

  `
};
routingAuthGuard = {
  name: 'Auth Guard',
  code: `

  import { Injectable } from '@angular/core';

  import { CanActivate,
           Router,
           ActivatedRouteSnapshot,
           RouterStateSnapshot,
           CanActivateChild,
           NavigationExtras,
           CanLoad,
           Route} from '@angular/router';

  import { AuthService } from './auth.service';

  @Injectable()
  export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

    constructor(private router: Router, private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      const url = state.url;
      return this.checkLogin(url);
    }


    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      return this.canActivate(route, state);
    }

    canLoad(route: Route): boolean {
      const url = \`/\${route.path}\`;
      return this.checkLogin(url);
    }

    checkLogin(url: string): boolean {
      if (this.authService.isLoggedIn) {
        return true;
      }

      this.authService.redirectUrl = url;

      const sessionId = 123456789;

      const navigationExtras: NavigationExtras = {
        queryParams: { 'session_id': sessionId },
        fragment: 'anchor'
      };

      this.router.navigate(['/login'], navigationExtras);
      return false;

    }
  }


  `
};
routingAuthService = {
  name: 'Auth Service',
  code: `

  import { Injectable } from '@angular/core';

  import { Observable } from 'rxjs/Observable';
  import 'rxjs/add/observable/of';
  import 'rxjs/add/operator/do';
  import 'rxjs/add/operator/delay';

  @Injectable()
  export class AuthService {
    isLoggedIn = false;

    redirectUrl: string;

    login(): Observable<boolean> {
      return Observable.of(true).delay(1000).do(value => this.isLoggedIn = true);
    }

    logout(): void {
      this.isLoggedIn = false;
    }

  }

  `
};
routingCanDeactivateGuard = {
  name: 'Can Deactivate Guard Service',
  code: `

  import { Injectable } from '@angular/core';
  import { CanDeactivate } from '@angular/router';

  import { Observable } from 'rxjs/Observable';

  export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
  }

  @Injectable()
  export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(component: CanComponentDeactivate) {
      return component.canDeactivate ? component.canDeactivate() : true;
    }

  }

  `
};
routingDialogService = {
  name: 'Dialog Service',
  code: `

  import { Injectable } from '@angular/core';

  import { Observable } from 'rxjs/Observable';
  import 'rxjs/add/observable/of';


  @Injectable()
  export class DialogService {

    confirm(message?: string): Observable<boolean> {
      const confirmation = window.confirm(message || 'Is it OK?');
      return Observable.of(confirmation);
    }

  }

  `
};
routingLoginRoutingModule = {
  name: 'Login Routing Module',
  code: `

  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';

  import { AuthGuard } from './auth-guard.service';
  import { AuthService } from './auth.service';

  import { LoginComponent } from './login/login.component';

  const loginRoutes: Routes = [
      { path: 'login', component: LoginComponent }
  ];

  @NgModule({
    imports: [
      RouterModule.forChild(loginRoutes)
    ],
    exports: [
      RouterModule
    ],
    providers: [
      AuthGuard,
      AuthService
    ]
  })
  export class LoginRoutingModule { }

  `
};
routingSPS = {
  name: 'Selective Preloading Strategy',
  code: `

  import { Injectable } from '@angular/core';
  import { Route, PreloadingStrategy } from '@angular/router';

  import { Observable } from 'rxjs/Observable';
  import 'rxjs/add/observable/of';


  @Injectable()
  export class SelectivePreloadingStrategy implements PreloadingStrategy {
         preloadedModules: string[] = [];

         preload(route: Route, load: () => Observable<any>): Observable<any> {
           if (route.data && route.data['preload']) {
             this.preloadedModules.push(route.path);
             console.log('Preloaded: ' + route.path);
             return load();
           } else {
             return Observable.of(null);
           }
         }

  }

  `
};
routingAM = {
  name: 'Admin Module',
  code: `

  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';

  import { AdminRoutingModule } from './admin-routing.module';

  import { ManageCrisesComponent } from './manage-crises/manage-crises.component';
  import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';
  import { AdminComponent } from './admin/admin.component';
  import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

  @NgModule({
    imports: [
      CommonModule,
      AdminRoutingModule
    ],
    declarations: [
      ManageCrisesComponent,
      ManageHeroesComponent,
      AdminComponent,
      AdminDashboardComponent
    ]
  })
  export class AdminModule { }

  `
};
routingARM = {
  name: 'Admin Routing Module',
  code: `

  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';

  import { AuthGuard } from '../auth-guard.service';

  import { ManageCrisesComponent } from './manage-crises/manage-crises.component';
  import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';
  import { AdminComponent } from './admin/admin.component';
  import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


  const adminRoutes: Routes = [
        {
          path: '',
          component: AdminComponent,
          canActivate: [ AuthGuard ],
          children: [
            {
              path: '',
              canActivateChild: [ AuthGuard ],
              children: [
                { path: 'crises', component: ManageCrisesComponent },
                { path: 'heroes', component: ManageHeroesComponent },
                { path: '', component: AdminDashboardComponent }
              ]
            }
          ]
        }
  ];

  @NgModule({
    imports: [
      RouterModule.forChild(adminRoutes)
    ],
    exports: [ RouterModule ]
  })
  export class AdminRoutingModule { }


  `
};
routingAC = {
  name: 'Admin Component',
  code: `

  import { Component } from '@angular/core';

  @Component({
    selector: 'app-admin-dashboard',
    template: \`
              <h3>ADMIN</h3>
                <nav>
                    <a routerLink="./" routerLinkActive="active"
                      [routerLinkActiveOptions]="{ exact: true }">Dashboard</a>
                    <a routerLink="./crises" routerLinkActive="active">Manage Crises</a>
                    <a routerLink="./heroes" routerLinkActive="active">Manage Heroes</a>
                </nav>
              <router-outlet></router-outlet>
    \`
  })
  export class AdminComponent { }

  `
};
routingADC = {
  name: 'Admin Dashboard Component',
  code: `

  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute } from '@angular/router';

  import { SelectivePreloadingStrategy } from '../../selective-preloading-strategy';

  import { Observable } from 'rxjs/Observable';
  import 'rxjs/add/operator/map';

  @Component({
    selector: 'app-admin-dashboard',
    template: \`
            <p>Dashboard</p>

            <p>Session ID: {{ sessionId | async }}</p>
            <a id="anchor"></a>
            <p>Token: {{ token | async }}</p>

            Preloaded Modules
            <ul>
                <li *ngFor="let module of modules">
                      {{ module }}
                </li>
            </ul>
    \`
  })
  export class AdminDashboardComponent implements OnInit {
        sessionId: Observable<string>;
        token: Observable<string>;
        modules: string[];

        constructor(private route: ActivatedRoute,
                    private selectivePreloadingStrategy: SelectivePreloadingStrategy) {
                      this.modules = selectivePreloadingStrategy.preloadedModules;
                     }

       ngOnInit() {
         this.sessionId = this.route.queryParamMap.map(params =>
        params.get('session_id') || 'None');

        this.token = this.route.fragment.map(fragment => fragment || 'None');
       }

   }


  `
};
routingMCMH = {
  name: 'Manage Heroes/Crises Components',
  code: `

  import { Component } from '@angular/core';

  @Component({
    selector: 'app-manage-crises',
    template: \`
          <p>Manage your crises here</p>
    \`
  })
  export class ManageCrisesComponent { }

********************************************************

import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-heroes',
  template: \`
        <p>Manage your heroes here</p>
  \`
})
export class ManageHeroesComponent { }

  `
};
routingCMC = {
  name: 'Compose Message Component',
  code: `

  import { Component, HostBinding } from '@angular/core';
  import { Router } from '@angular/router';

  import { slideInDownAnimation } from '../animations';

  @Component({
    selector: 'app-compose-message',
    template: \`
              <h3>Contact Crisis Center</h3>
              <div *ngIf="details">
                {{ details }}
              </div>
              <div>
                  <div>
                        <label>Message: </label>
                  </div>
                  <div>
                        <textarea [(ngModel)]="message" rows="10" cols="35"
                                  [disabled]="sending">
                        </textarea>
                  </div>
              </div>
              <p *ngIf="!sending">
                  <button (click)="send()">Send</button>
                  <button (click)="cancel()">Cancel</button>
              </p>
    \`,
    styles: [':host { position: relative; bottom: 10%; '],
    animations: [ slideInDownAnimation ]
  })
  export class ComposeMessageComponent {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display') display = 'block';
    @HostBinding('style.position') position = 'absolute';

    details: string;
    message = '';
    sending = false;

    constructor(private router: Router) { }

    send() {
      this.sending = true;
      this.details = 'Sending Message';

      setTimeout(() => {
        this.sending = false;
        this.closePopup();
      }, 1000);
    }

    cancel() {
      this.closePopup();
    }

    closePopup() {
      this.router.navigate([{ outlets: { popup: null }}]);
    }

  }

  `
};
routingCMCS = {
  name: 'Crisis Service',
  code: `

  import { Injectable } from '@angular/core';

  import { BehaviorSubject } from 'rxjs/BehaviorSubject';
  import 'rxjs/add/operator/map';
  import 'rxjs/add/observable/of';

  export class Crisis {
    constructor(public id: number, public name: string) { }
  }

  const CRISES = [
      new Crisis(1, 'Dragon Burning Cities'),
      new Crisis(2, 'Sky Rains Great White Sharks'),
      new Crisis(3, 'Giant Asteroids Heading For Earth'),
      new Crisis(4, 'Procrastinators Meeting Delayed Again')
  ];

  @Injectable()
  export class CrisisService {
    static nextCrisisId = 100;
    private crises$: BehaviorSubject<Crisis[]> = new BehaviorSubject<Crisis[]>(CRISES);

    getCrises() {
      return this.crises$;
    }

    getCrisis(id: number | string) {
      return this.getCrises().map(crises => crises.find(crisis => crisis.id === +id));
    }

    addCrisis(name: string) {
      name = name.trim();
      if (name) {
        const crisis = new Crisis(CrisisService.nextCrisisId++, name);
        CRISES.push(crisis);
        this.crises$.next(CRISES);
      }
    }

  }

  `
};
routingCMCLC = {
  name: 'Crisis List Component',
  code: `

  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute, ParamMap } from '@angular/router';

  import { CrisisService, Crisis } from './crisis.service';
  import { Observable } from 'rxjs/Observable';

  @Component({
    selector: 'app-crisis-list',
    template: \`
            <ul class="items">
                <li *ngFor="let crisis of crises$ | async"
                     [class.selected]="crisis.id === selectedId">
                <a [routerLink]="[crisis.id]">
                  <span class="badge">{{ crisis.id }}</span>{{ crisis.name }}
                </a>
                </li>
            </ul>

            <router-outlet></router-outlet>
    \`
  })
  export class CrisisListComponent implements OnInit {
    crises$: Observable<Crisis[]>;
    selectedId: number;

    constructor(private crisisService: CrisisService,
                private route: ActivatedRoute) { }

    ngOnInit() {
      this.crises$ = this.route.paramMap.switchMap((params: ParamMap) => {
            this.selectedId = +params.get('id');
            return this.crisisService.getCrises();
      });
    }

  }

  `
};
routingCMCDC = {
  name: 'Crisis Detail Component',
  code: `

  import { Component, OnInit, HostBinding } from '@angular/core';
  import { ActivatedRoute, Router } from '@angular/router';

  import { Crisis } from './crisis.service';
  import { slideInDownAnimation } from '../animations';
  import { DialogService } from '../dialog-service';

  import { Observable } from 'rxjs/Observable';

  @Component({
    selector: 'app-crisis-detail',
    template: \`
            <div *ngIf="crisis">
                  <h3>"{{ editName }}"</h3>
                <div>
                    <label>Id: </label>{{ crisis.id }}
                </div>
                <div>
                    <label>Name: </label>
                    <input [(ngModel)]="editName" placeholder="name">
                </div>
                <p>
                      <button (click)="save()">Save</button>
                      <button (click)="cancel()">Cancel</button>
                </p>
            </div>
    \`,
    styles: ['input { width: 20em; }'],
    animations: [ slideInDownAnimation ]
  })
  export class CrisisDetailComponent implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display') display = 'block';
    @HostBinding('style.position') position = 'absolute';

    crisis: Crisis;
    editName: string;

    constructor(private route: ActivatedRoute,
                private router: Router,
                public dialogService: DialogService) { }

    ngOnInit() {
      this.route.data.subscribe((data: { crisis: Crisis }) => {
            this.editName = data.crisis.name;
            this.crisis = data.crisis;
      });
    }

    cancel() {
      this.gotoCrises();
    }

    save() {
      this.crisis.name = this.editName;
      this.gotoCrises();
    }

    canDeactivate(): Observable<boolean>| boolean {
      if (!this.crisis || this.crisis.name === this.editName) {
        return true;
      }

      return this.dialogService.confirm('Discard changes?');
    }

    gotoCrises() {
      const crisisId = this.crisis ? this.crisis.id : null;
      this.router.navigate(['../', { id: crisisId, foo: 'bar'}], { relativeTo: this.route });
    }

  }

  `
};
routingCMCDR = {
  name: 'Crisis Detail Resolver',
  code: `

  import { Injectable } from '@angular/core';
  import { Router, Resolve, RouterStateSnapshot,
           ActivatedRouteSnapshot } from '@angular/router';

  import { CrisisService, Crisis } from './crisis.service';

  import { Observable } from 'rxjs/Observable';
  import 'rxjs/add/operator/take';
  import 'rxjs/add/operator/map';

  @Injectable()
  export class CrisisDetailResolver implements Resolve<Crisis> {

    constructor(private crisisService: CrisisService,
                private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Crisis> {
      const id = route.paramMap.get('id');

      return this.crisisService.getCrisis(id).take(1).map(crisis => {
        if (crisis) {
          return crisis;
        } else {
          this.router.navigate(['/crisis-center']);
          return null;
        }
      });
    }

  }

  `
};
routingCMCCM = {
  name: 'Crisis Center Module',
  code: `

  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormsModule } from '@angular/forms';

  import { CrisisCenterRoutingModule } from './crisis-center-routing.module';

  import { CrisisCenterHomeComponent } from './crisis-center-home.component';
  import { CrisisCenterComponent } from './crisis-center.component';
  import { CrisisDetailComponent } from './crisis-detail.component';
  import { CrisisListComponent } from './crisis-list.component';

  import { CrisisService } from './crisis.service';

  @NgModule({
    imports: [
      CommonModule,
      FormsModule,
      CrisisCenterRoutingModule
    ],
    declarations: [
      CrisisCenterHomeComponent,
      CrisisCenterComponent,
      CrisisDetailComponent,
      CrisisListComponent
    ],
    providers: [
      CrisisService
    ]
  })
  export class CrisisCenterModule { }

  `
};
routingCCC = {
  name: 'Crisis Center Component',
  code: `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-crisis-center',
    template: \`
            <h2>CRISIS CENTER</h2>
            <router-outlet></router-outlet>
    \`
  })
  export class CrisisCenterComponent { }

  `
};
routingCMCCRM = {
  name: 'Crisis Center Routing Module',
  code: `

  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';

  import { CrisisCenterHomeComponent } from './crisis-center-home.component';
  import { CrisisCenterComponent } from './crisis-center.component';
  import { CrisisDetailComponent } from './crisis-detail.component';
  import { CrisisListComponent } from './crisis-list.component';

  import { CanDeactivateGuard } from '../can-deactivate-guard.service';
  import { CrisisDetailResolver } from './crisis-detail-resolver.service';

  const crisisCenterRoutes: Routes = [
      {
        path: '',
        component: CrisisCenterComponent,
        children: [
          {
            path: '',
            component: CrisisListComponent,
            children: [
              {
                path: ':id',
                component: CrisisDetailComponent,
                canDeactivate: [ CanDeactivateGuard ],
                resolve: {
                  crisis: CrisisDetailResolver
                }
              },
              {
                path: '',
                component: CrisisCenterHomeComponent
              }
            ]
          }
        ]
      }

  ];

  @NgModule({
    imports: [
      RouterModule.forChild(crisisCenterRoutes)
    ],
    exports: [
      RouterModule
    ],
    providers: [
      CrisisDetailResolver
    ]
  })
  export class CrisisCenterRoutingModule { }

  `
};
routingCMCHC = {
  name: 'Crisis Home Component',
  code: `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-crisis-center-home',
    template: \`
        <p>Welcome to the Crisis Center</p>
    \`
  })
  export class CrisisCenterHomeComponent  { }


  `
};
routingHMHM = {
  name: 'Heroes Module',
  code: `

  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormsModule } from '@angular/forms';

  import { HeroesRoutingModule } from './heroes-routing.module';

  import { HeroListComponent } from './hero-list.component';
  import { HeroDetailComponent } from './hero-detail.component';

  import { HeroService } from './hero.service';

  @NgModule({
    imports: [
      CommonModule,
      FormsModule,
      HeroesRoutingModule
    ],
    declarations: [
      HeroListComponent,
      HeroDetailComponent
    ],
    providers: [ HeroService ]
  })
  export class HeroesModule { }

  `
};
routingHMHRM = {
  name: 'Heroes Routing Module',
  code: `
  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';

  import { HeroListComponent } from './hero-list.component';
  import { HeroDetailComponent } from './hero-detail.component';

  const heroesRoutes: Routes = [
    { path: 'heroes', redirectTo: '/superheroes' },
    { path: 'hero/:id', redirectTo: '/superhero/:id' },
    { path: 'superheroes', component: HeroListComponent },
    { path: 'superhero/:id', component: HeroDetailComponent }
  ];

  @NgModule({
    imports: [
      RouterModule.forChild(heroesRoutes)
    ],
    exports: [ RouterModule ]
  })
  export class HeroesRoutingModule { }

  `
};
routingHMHS = {
  name: 'Hero Service',
  code: `

  import { Injectable } from '@angular/core';

  import { Observable } from 'rxjs/Observable';
  import 'rxjs/add/operator/map';
  import 'rxjs/add/observable/of';


  export class Hero {
    constructor(public id: number, public name: string) { }
  }

  const HEROES = [
    new Hero(11, 'Flash'),
    new Hero(12, 'Wonderwoman'),
    new Hero(13, 'Superman'),
    new Hero(14, 'Spiderman'),
    new Hero(15, 'Batman'),
    new Hero(16, 'Green Arrow')
  ];

  @Injectable()
  export class HeroService {

    getHeroes() {
      return Observable.of(HEROES);
    }

    getHero(id: number | string) {
      return this.getHeroes().map(heroes => heroes.find(hero => hero.id === +id));
    }

  }

  `
};
routingHMHLC = {
  name: 'Hero List Component',
  code: `

  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute, ParamMap } from '@angular/router';

  import { HeroService, Hero } from './hero.service';

  import { Observable } from 'rxjs/Observable';
  import 'rxjs/add/operator/switchMap';

  @Component({
    selector: 'app-hero-list',
    template: \`
                <h2>HEROES</h2>
                <ul class="items">
                    <li *ngFor="let hero of heroes$ | async"
                         [class.selected]="hero.id === selectedId">
                    <a [routerLink]="['/hero', hero.id]">
                        <span class="badge">{{ hero.id }}</span>{{ hero.name }}
                    </a>
                    </li>
                </ul>

              <button routerLink="/sidekicks">Go to sidekicks</button>
    \`
  })
  export class HeroListComponent implements OnInit {

    heroes$: Observable<Hero[]>;

    private selectedId: number;

    constructor(private heroService: HeroService,
                private route: ActivatedRoute) { }

    ngOnInit() {
      this.heroes$ = this.route.paramMap
                     .switchMap((params: ParamMap) => {
            this.selectedId = +params.get('id');
            return this.heroService.getHeroes();
      });
    }

  }

  `
};
routingHMHDC = {
  name: 'Hero Detail Component',
  code: `
  import { Component, OnInit, HostBinding } from '@angular/core';
  import { Router, ActivatedRoute, ParamMap } from '@angular/router';

  import { slideInDownAnimation } from '../animations';
  import { HeroService, Hero } from './hero.service';

  import { Observable } from 'rxjs/Observable';
  import 'rxjs/add/operator/switchMap';

  @Component({
    selector: 'app-hero-detail',
    template: \`
          <h2>HEROES</h2>
          <div *ngIf="hero$ | async as hero">
              <h3>"{{ hero.name }}"</h3>
              <div>
                  <label>ID: </label>{{ hero.id }}
              </div>
              <div>
                  <label>Name: </label>
                  <input [(ngModel)]="hero.name" placeholder="name">
              </div>
              <p>
                  <button (click)="gotoHeroes(hero)">Back</button>
              </p>
          </div>

    \`,
    animations: [ slideInDownAnimation ]
  })
  export class HeroDetailComponent implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display') display = 'block';
    @HostBinding('style.position') position = 'absolute';

    hero$: Observable<Hero>;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private heroService: HeroService) { }

    ngOnInit() {
      this.hero$ = this.route.paramMap.switchMap((params: ParamMap) =>
            this.heroService.getHero(params.get('id')));
    }

    gotoHeroes(hero: Hero) {
      const heroId = hero ? hero.id : null;
      this.router.navigate(['/heroes', { id: heroId, foo: 'bar' }]);
    }

  }

  `
};
routingLC = {
  name: 'Login Component',
  code: `

  import { Component, OnDestroy } from '@angular/core';
  import { Router, NavigationExtras } from '@angular/router';

  import { AuthService } from '../auth.service';
  import { Subscription } from 'rxjs/Subscription';


  @Component({
    selector: 'app-login',
    template: \`
          <h2>LOGIN</h2>
          <p>{{ message }}</p>
          <p>
              <button (click)="login()" *ngIf="!authService.isLoggedIn">Login</button>
              <button (click)="logout()" *ngIf="authService.isLoggedIn">Logout</button>
          </p>
    \`
  })
  export class LoginComponent implements OnDestroy {
    message: string;
    authSubscription: Subscription;

    constructor(public authService: AuthService, private router: Router) {
      this.setMessage();
     }

     setMessage() {
       this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
     }

     login() {
       this.message = 'Trying to log in ...';
       this.authSubscription = this.authService.login().subscribe(() => {
         this.setMessage();
         if (this.authService.isLoggedIn) {
           const redirect = this.authService.redirectUrl ?
           this.authService.redirectUrl : '/admin';
           const navigationExtras: NavigationExtras = {
             queryParamsHandling: 'preserve',
             preserveFragment: true
           };
           this.router.navigate([redirect], navigationExtras);
         }
       });
     }

     logout() {
       this.authService.logout();
       this.setMessage();
     }

     ngOnDestroy() {
       if (this.authSubscription !== undefined) {
       this.authSubscription.unsubscribe();
       }
     }

  }

  `
};
routingPNFC = {
  name: 'Page Not Found Component',
  code: `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-page-not-found',
    template: \`
            <h2>Page Not Found</h2>
    \`
  })
  export class PageNotFoundComponent { }

  `
};
routingRMAS = {
  name: 'App Styles',
  code: `
  /* items class */
  .items {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 24em;
  }
  .items li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .items li a {
    display: block;
    text-decoration: none;
  }
  .items li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .items li.selected {
    background-color: #CFD8DC;
    color: white;
  }
  .items li.selected:hover {
    background-color: #BBD8DC;
  }
  .items .text {
    position: relative;
    top: -3px;
  }
  .items .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }

  `
};
routingRMMS = {
  name: 'Master Styles',
  code: `

  h1 {
    color: #369;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 250%;
  }
  h2, h3 {
    color: #444;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: lighter;
  }
  body {
    margin: 2em;
  }
  body, input[text], button {
    color: #888;
    font-family: Cambria, Georgia;
  }
  a {
    cursor: pointer;
    cursor: hand;
  }
  button {
    font-family: Arial;
    background-color: #eee;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    cursor: hand;
  }
  button:hover {
    background-color: #cfd8dc;
  }
  button:disabled {
    background-color: #eee;
    color: #aaa;
    cursor: auto;
  }

  /* Navigation link styles */
  nav a {
    padding: 5px 10px;
    text-decoration: none;
    margin-right: 10px;
    margin-top: 10px;
    display: inline-block;
    background-color: #eee;
    border-radius: 4px;
  }
  nav a:visited, a:link {
    color: #607D8B;
  }
  nav a:hover {
    color: #039be5;
    background-color: #CFD8DC;
  }
  nav a.active {
    color: #039be5;
  }

  /* everywhere else */
  * {
    font-family: Arial, Helvetica, sans-serif;
  }


  `
};
qrBootstrapping = {
  name: 'Bootstrapping',
  code: `

        import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

        // bootstraps the app, using the root component from the specified NgModule.
        platformBrowserDynamic().bootstrapModule(AppModule);

  `
};
qrNgModules = {
  name: 'NgModules',
  code: `

        import { NgModule } from '@angular/core;

        // defines a module that contains components, directives, pipes and providers.
        @NgModule({
          declarations: ...,
          imports: ...,
          exports: ...,
          providers: ...,
          bootstrap: ...
        })
        class MyModule { }

        // list of components, directives, and pipes that belong to this module.
        declarations: [ MyRedComponent, MyBlueComponent, MyDatePipe ]

        // list of modules to import into this module. everything from the imported
        // modules is available to declarations of this module.
        imports: [ BrowserModule, SomeOtherModule ]

        // list of components, directives, and pipes visible to modules that
        // import this module.
        exports: [ MyRedComponent, MyDatePipe ]

        // list of dependency injection providers visible both to the contents of this
        // module and to importers of this module.
        providers: [ MyService, { provide: ... } ]

        // list of components to bootstrap when this module is bootstrapped.
        bootstrap: [ MyAppComponent ]

  `
};
qrTemplateSyntax = {
  name: 'Template Syntax',
  code: `

      // binds property value to the result of expression firstName.
      <input [value]="firstName">

      // binds attribute role to the result of expression myAriaRole.
      <input [attr.role]="myAriaRole">

      // binds the presence of the css class extra-sparkle on the element
      // to the truthiness of the expression isDelightful.
      <div [class.extra-sparkle]="isDelightful"></div>

      // binds style property width to the result of expression mySize in pixels.
      // units are optional.
      <div [style.width.px]="mySize"></div>

      // calls method readRainbow when a click event is triggered on this button
      // element (or its children) and passes in the event object.
      <button (click)="readRainbow($event)"></button>

      // binds a property to an interpolated string, for example, "Hi Baby".
      // Equivalent to: <div [title]="'Hi ' + girlyName">.
      <div title="Hi {{ girlyName }}"></div>

      // binds text content to an interpolated string, for example, "Hi Baby".
      <p>Hi {{ girlyName }}</p>

      // sets up two-way binding. equivalent to: <my-cmp [title]="name"
      // (titleChange)="name=$event">.
      <my-cmp [(title)]="name"></my-cmp>

      // creates a local variable movieplayer that provides access to the video element
      // instance in data-binding and event-binding expressions in the current template.
      <video #movieplayer ...>
      <button (click)="movieplayer.play()">Play</button>
      </video>

      // the * symbol turns the current element into an embedded template. equivalent to:
      // <ng-template [myUnless]="myExpression"><p>...</p></ng-template>.
      <p *myUnless="myExpression"></p>

      // transforms the current value of expression cardNumber via the pipe called
      // myCardNumberFormatter.
      <p>Card No.: {{ cardNumber | myCardNumberFormatter }}</p>

      // the safe navigation operator (?) means the employer field is optional and if
      // undefined, the rest of the expression should be ignored. formerly known as
      // the elvis operator.
      <p>Employer: {{ employer?.companyName }}</p>

      // an svg snippet template needs an svg: prefix on its root element to disambiguate
      // the svg element from an html component.
      <svg:rect x="0" y="0" width="100" height="100"/>

      // an <svg> root element is detected as an svg element automatically,
      // without the prefix.
      <svg>
      <rect x="0" y="0" width="100" height="100"/>
      </svg>

  `
};
qrBuiltInDirectives = {
  name: 'Built-In Directives',
  code: `

          import { CommonModule } from '@angular/common';

          // removes or recreates a portion of the dom tree based on the
          // showSection expression.
          <section *ngIf="showSection">

          // turns the li element and its contents into a template, and uses
          // that to instantiate a view for each item in the list.
          <ul>
              <li *ngFor="let item of list">
                    {{ item }}
              </li>
          </ul>

          // conditionally swaps the contents of the div by selecting one of the
          // embedded templates based on the current value of conditionExpression.
          <div [ngSwitch]="conditionExpression">
            <ng-template [ngSwitchCase]="case1Exp">...</ng-template>
            <ng-template ngSwitchCase="case2LiteralString">...</ng-template>
            <ng-template ngSwitchDefault>...</ng-template>
          </div>

          // binds the presence of css classes on the element to the truthiness of
          // the associated map values. the right-hand expression should return
          // {class-name: true/false} map.
          <div [ngClass]="{'active': isActive, 'disabled': isDisabled}"></div>

  `
};
qrForms = {
  name: 'Forms',
  code: `

          import { FormsModule } from '@angular/forms';

          // provides two-way data-binding, parsing, and validation for form controls.
          <input [(ngModel)]="userName">

  `
};
qrClassDecorators = {
  name: 'Class Decorators',
  code: `

          import { Directive, ... } from '@angular/core';

          // declares that a class is a component and provides metadata about the component.
          @Component({
            ...
          })
          class MyComponent { }

          // declares that a class is a directive and provides metadata about the directive.
          @Directive({
            ...
          })
          class MyDirective { }

          // declares that a class is a pipe and provides metadata about the pipe.
          @Pipe({
            ...
          })
          class MyPipe { }

          // declares that a class has dependencies that should be injected
          // into the constructor when the dependency injector is creating
          // an instance of this class.
          @Injectable()
          class MyService { }

  `
};
qrDirectiveConfiguration = {
  name: 'Directive Configuration',
  code: `

            @Directive({
              property1: value1,
              ...
            })

            // specifies a css selector that identifies the directive within a template.
            // supported selectors include element, [attribute], .class, and :not().
            // does not support parent-child relationship selectors.
            selector: '.cool-button:not(a)'

            // list of dependency injection providers for this directive and its children.
            providers: [ MyService, { provide: ... }]

  `
};
qrComponentConfiguration = {
  name: 'Component Configuration',
  code: `

          @Component extends @Directive, so the @Directive configuration applies
          to components as well

          // if set, the templateurl and styleurl are resolved to the component.
          moduleId: module.id

          // list of dependency injection providers scoped to the component's view.
          viewProviders: [ MyService, { provide: ... } ]

          // inline template or external template url of the component's view.
          template: 'Hello {{ wifeName }}'
          templateUrl: 'my-component.html'

          // list of inline css styles or external stylesheet urls for styling
          // the component's view.
          styles: ['.primary { color: red; }']
          styleUrls: ['my-component.css']

  `
};
qrClassFieldDecorators = {
  name: 'Class Field Decorators For Directives And Components',
  code: `

          import { Input, ... } from '@angular/core';

          // declares an input property that you can update via property binding
          // (example: <my-cmp [myProperty]="someExpression"></my-cmp>).
          @Input() myProperty;

          // declares an output property that fires events you can subscribe to
          // with an event binding (example: <my-cmp (myEvent)="letsGetMarried()">
          // </my-cmp>).
          @Output() myEvent = new EventEmitter();

          // binds a host element property (here, the css class valid) to a
          // directive/component property (isValid).
          @HostBinding('class.valid') isValid;

          // subscribes to a host element event (click) with a directive/component
          // method (onClick), optionally passing an argument ($event).
          @HostListener('click', [$event]) onClick(e) { ... }

          // binds the first result of the component content query (myPredicate)
          // to a property (myChildComponent) of the class.
          @ContentChild(myPredicate) myChildComponent;

          // binds the results of the component content query (myPredicate) to a property
          // (myChildComponents) of the class.
          @ContentChildren(myPredicate) myChildComponents;

          // binds the first result of the component view query (myPredicate) to a property
          // (myChildComponent) of the class. not available for directives.
          @ViewChild(myPredicate) myChildComponent;

          // binds the results of the component view query (myPredicate) to a property
          // (myChildComponents) of the class. not available for directives.
          @ViewChildren(myPredicate) myChildComponents;

  `
};
qrChangeDetectionLifecyleHooks = {
  name: 'Directive/Component Change Detection && Lifecycle Hooks',
  code: `

          // called before anyother lifecycle hook. use it to inject dependencies,
          // but avoid any serious work here.
          constructor(myService: MyService, ...) { ... }

          // called after every change to input properties and before processing
          // content or child views.
          ngOnChanges(changeRecord) { ... }

          // called after the constructor, initializing input properties, and the first
          // call to ngOnChanges.
          ngOnInit() { ... }

          // called every time that the input properties of a component or a directive
          // are checked. use it to extend change detection by performing a custom check.
          ngDoCheck() { ... }

          // called after ngOnInit when the component's or directive's content has been
          // initialized.
          ngAfterContentInit() { ... }

          // called after every check of the component's or directive's content.
          ngAfterContentChecked() { ... }

          // called after ngAfterContentInit when the component's view has been initialized.
          // applies to component's only.
          ngAfterViewInit() { ... }

          // called after every check of the component's view. applies to component's only.
          ngAfterViewChecked() { ... }

          // called once, before the instance is destroyed.
          ngOnDestroy() { ... }


  `
};
qrDependencyInjectionConfiguration = {
  name: 'Dependency Injection Configuration',
  code: `

          // sets or overrides the provider for myservice to the mymockservice class.
          { provide: MyService, useClass: MyMockService }

          // sets or overrides the provider for myservice to the myfactory factory function.
          { provide: MyService, useFactory: myFactory }

          // sets or overrides the provider for myvalue to the value 42.
          { provide: MyValue, useValue: 42 }
  `
};
qrRoutingNavigation = {
  name: 'Routing && Navigation',
  code: `

            import { Routes, RouterModule, ... } from '@angular/router';

            // configure routes for the application. supports static, parameterized,
            // redirect, and wildcard routes. also supports custom route data and resolve.
            const routes: Routes = [
              { path: '', component: HomeComponent },
              { path: 'path/:routeParam', component: MyComponent },
              { path: 'staticPath', component: ... },
              { path: '**', component: ... },
              { path: 'oldPath', redirectTo: '/staticPath' },
              { path: ..., component: ..., data: { message: 'Custom' } }
            ];
            const routing = RouterModule.forRoot(routes);

            // marks the location to load the component of the active route.
            <router-outlet></router-outlet>
            <router-outlet name="aux"></router-outlet>

            // creates a link to a different view based on a route instruction consisting
            // of a route path, required and optional parameters, query parameters, and a
            // fragment. to navigate to a root route, use the / prefix: for a child route,
            // use the ./ prefix; for a sibling or parent, use the ../prefix.
            <a routerLink="/path"></a>
            <a [routerLink]="['/path', routeParam]"></a>
            <a [routerLink]="['/path', { matrixParam: 'value' }]"></a>
            <a [routerLink]="['/path']" [queryParams]="{ page: 1 }"></a>
            <a [routerLink]="['/path']" fragment="anchor"></a>

            // the provided classes are added to the element when the routerlink
            // becomes the current active route.
            <a [routerLink]="[ '/path' ]" routerLinkActive="active"></a>

            // an interface for defining a class that the router should call first to
            // determine if it should activate this component. should return a boolean
            // or an observable/promise that resolves to a boolean.
            class CanActivateGuard implements CanActivate {
              canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
                          Observable<boolean> | Promise<boolean> | boolean { ... }

            }

            { path: ..., canActivate: [ CanActivateGuard ]}

            // an interface for defining a class that the router should call first to
            // determine if it should deactivate this component after navigation.
            // should return a boolean or an observable/promise that resolves to a
            // boolean.
            class CanDeactivateGuard implements CanDeactivate<T> {
              canDeactivate(component: T, route: ActivatedRouteSnapshot,
                            state: RouterStateSnapshot): Observable<boolean>
                            | Promise<boolean> | boolean { ... }
            }

            { path: ..., canDeactivate: [ CanDeactivateGuard ]}

            // an interface for defining a class that the router should call first to
            // determine if it should activate the child route. should return a boolean
            // or an observable/promise that resolves to a boolean.
            class CanActivateChildGuard implements CanActivateChild {
              canActivateChild(route: ActivatedRouteSnapshot,
                            state: RouterStateSnapshot): Observable<boolean>
                            | Promise<boolean> | boolean { ... }
            }

            { path: ..., canActivateChild: [ CanActivateGuard ], children: ... }

            // an interface for defining a class that the router should call first to
            // resolve route data before rendering the route.
            // should return a value or an observable/promise that resolves to a value.
            class ResolveGuard implements Resolve<T> {
              resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
                     Observable<any> | Promise<any> | any { ... }
            }

            { path: ..., resolve: [ ResolveGuard ]}

            // an interface for defining a class that the router should call first to
            // check if the lazy loaded module should be loaded. should return a boolean
            // or an observable/promise that resolves to a boolean.
            class CanLoadGuard implements CanLoad {
              canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean { ... }
            }

            { path: ..., canLoad: [ CanLoadGuard ], loadChildren: ... }

  `
};
testingp208 = {
  name: 'Banner Inline Component',
  code: `

  import { Component } from '@angular/core';

  @Component({
    selector: 'app-banner-inline',
    template: \`
      <h1>{{ title }}</h1>
    \`
  })
  export class BannerInlineComponent {
      title = 'Test Tour of Heroes';

  }

  `
};
testingp209 = {
  name: 'Banner Inline Component Tests',
  code: `

  import { async, ComponentFixture, TestBed } from '@angular/core/testing';
  import { By } from '@angular/platform-browser';
  import { DebugElement } from '@angular/core';

  import { BannerInlineComponent } from './banner-inline.component';

  describe('BannerInlineComponent (inline template)', () => {
    let component: BannerInlineComponent;
    let fixture: ComponentFixture<BannerInlineComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [ BannerInlineComponent ] // declare test component
      })
      .compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(BannerInlineComponent);
      component = fixture.componentInstance; // component test instance
      // query for title h1 by css element selector
      de = fixture.debugElement.query(By.css('h1'));
      el = de.nativeElement;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should display original title', () => {
      expect(el.textContent).toContain(component.title);
    });

    it('should display a different test title', () => {
      component.title = 'Hi baby';
      fixture.detectChanges();
      expect(el.textContent).toContain('Hi baby');
    });

  });

  `
};
testingp210 = {
  name: 'Banner Component AutoChangeDetect Tests',
  code: `

  import { async } from '@angular/core/testing';
  import { ComponentFixtureAutoDetect } from '@angular/core/testing';
  import { ComponentFixture, TestBed } from '@angular/core/testing';
  import { By } from '@angular/platform-browser';
  import { DebugElement } from '@angular/core';

  import { BannerComponent } from './banner.component';

  describe('Banner Component (AutoChangeDetect)', () => {
      let comp: BannerComponent;
      let fixture: ComponentFixture<BannerComponent>;
      let de: DebugElement;
      let el: HTMLElement;

      beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ BannerComponent ],
          providers: [
            { provide: ComponentFixtureAutoDetect, useValue: true }
          ]
        })
        .compileComponents();
      }));

      beforeEach(() => {
        fixture = TestBed.createComponent(BannerComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('h1'));
        el = de.nativeElement;
      });

      it('should display original title', () => {
        expect(el.textContent).toContain(comp.title);
      });

      it('should still see original title after comp.title change', () => {
        const oldTitle = comp.title;
        comp.title = 'Hi Carmen';
        expect(el.textContent).toContain(oldTitle);
      });

      it('should display updated title after detectChanges', () => {
        comp.title = 'Hi Carmen';
        fixture.detectChanges();
        expect(el.textContent).toContain(comp.title);
      });

  });

  `
};
testingp211 = {
  name: 'Banner Component TemplateURL Tests',
  code: `

  import { async, ComponentFixture, TestBed } from '@angular/core/testing';
  import { By } from '@angular/platform-browser';
  import { DebugElement } from '@angular/core';

  import { BannerComponent } from './banner.component';

  describe('BannerComponent (TemplateURL)', () => {
    let comp: BannerComponent;
    let fixture: ComponentFixture<BannerComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    // async beforeeach
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ BannerComponent ] // declare test component
      })
      .compileComponents(); // compile template and css
    }));

    // synchronous beforeeach
    beforeEach(() => {
      fixture = TestBed.createComponent(BannerComponent);
      comp = fixture.componentInstance; // banner component test instance
      // query for title h1 by css element selector
      de = fixture.debugElement.query(By.css('h1'));
      el = de.nativeElement;
      // fixture.detectChanges();
    });

    it('should create', () => {
      expect(comp).toBeTruthy();
    });

    it('no title in DOM until manually call \`detectChanges\`', () => {
      expect(el.textContent).toEqual('');
    });

    it('should display original title', () => {
      fixture.detectChanges();
      expect(el.textContent).toContain(comp.title);
    });

    it('should display a different test title', () => {
      comp.title = 'Hi Baby!';
      fixture.detectChanges();
      expect(el.textContent).toContain('Hi Baby!');
    });

  });


  `
};
testingp212 = {
  name: 'DashboardHero Component',
  code: `

  import { Component, Input, Output, EventEmitter } from '@angular/core';

  import { Hero } from '../model/hero';

  @Component({
    selector: 'app-dashboard-hero',
    template: \`
      <div (click)="click()" class="hero">
            {{ hero.name | uppercase }}
      </div>
    \`,
    styleUrls: ['./dashboard-hero.component.css']
  })
  export class DashboardHeroComponent  {
    @Input() hero: Hero;
    @Output() selected = new EventEmitter<Hero>();

    click() {
      this.selected.emit(this.hero);
    }

  }


  `
};
testingp213 = {
  name: 'DashboardHero Component Tests',
  code: `

  import { async, ComponentFixture, TestBed } from '@angular/core/testing';
  import { By } from '@angular/platform-browser';
  import { DebugElement } from '@angular/core';

  import { addMatchers, click } from '../../testing';

  import { DashboardHeroComponent } from './dashboard-hero.component';
  import { Hero } from '../model/hero';

  describe('DasboardHeroComponent', () => {
    let component: DashboardHeroComponent;
    let expectedHero: Hero;
    let fixture: ComponentFixture<DashboardHeroComponent>;
    let heroEl: DebugElement;

    // async beforeeach
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ DashboardHeroComponent ]
      })
      .compileComponents(); // compile template and css
    }));

    // synchronous beforeeach
    beforeEach(() => {
      fixture = TestBed.createComponent(DashboardHeroComponent);
      component = fixture.componentInstance;
      heroEl = fixture.debugElement.query(By.css('.hero')); // find hero element

      // pretend wired to something that supplied a hero
      expectedHero = new Hero(42, 'Nils-Holger');
      component.hero = expectedHero;
      fixture.detectChanges(); // trigger initial data binding
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should display hero name', () => {
      const expectedPipedName = expectedHero.name.toUpperCase();
      expect(heroEl.nativeElement.textContent).toContain(expectedPipedName);
    });

    it('should raised selected event when clicked', () => {
      let selectedHero: Hero;
      component.selected.subscribe((hero: Hero) => selectedHero = hero);

      heroEl.triggerEventHandler('click', null);
      expect(selectedHero).toBe(expectedHero);
    });

    it('should raised selected event when clicked', () => {
      let selectedHero: Hero;
      component.selected.subscribe((hero: Hero) => selectedHero = hero);

      click(heroEl); // triggereventhandler helper
      expect(selectedHero).toBe(expectedHero);
    });
  });

  describe('DashboardHeroComponent when inside a test host', () => {
      let testHost: TestHostComponent;
      let fixture: ComponentFixture<TestHostComponent>;
      let heroEl: DebugElement;

      beforeEach(async() => {
        TestBed.configureTestingModule({
          declarations: [ DashboardHeroComponent, TestHostComponent ] // declare both
        }).compileComponents();
      });

      beforeEach(() => {
        // create testhostcomponent instead of dashboardherocomponent
        fixture = TestBed.createComponent(TestHostComponent);
        testHost = fixture.componentInstance;
        heroEl = fixture.debugElement.query(By.css('.hero')); // find hero
        fixture.detectChanges(); // trigger initial data binding
      });

      it('should display hero name', () => {
        const expectedPipedName = testHost.hero.name.toUpperCase();
        expect(heroEl.nativeElement.textContent).toContain(expectedPipedName);
      });

      it('should raise selected event when clicked', () => {
        click(heroEl);
        expect(testHost.selectedHero).toBe(testHost.hero);
      });

  });

  //// test host component ////
  import { Component } from '@angular/core';

  @Component({
    template: \`
            <app-dashboard-hero [hero]="hero"
            (selected)="onSelected($event)">
            </app-dashboard-hero>
    \`
  })
  class TestHostComponent {
    hero = new Hero(42, 'Nils-Holger');
    selectedHero: Hero;
    onSelected(hero: Hero) {
      this.selectedHero = hero;
    }
  }

  `
};
testingp214 = {
  name: 'Dashboard Component',
  code: `

  import { Component, OnInit } from '@angular/core';
  import { Router } from '@angular/router';

  import { Hero } from '../model/hero';
  import { HeroService } from '../model/hero.service';

  @Component({
    selector: 'app-dashboard',
    template: \`
        <h2 highlight>{{ title }}</h2>

        <div class="grid grid-pad">
          <app-dashboard-hero *ngFor="let hero of heroes" class="col-1-4"
                              [hero]="hero" (selected)="gotoDetail($event)">
          </app-dashboard-hero>
        </div>
    \`,
    styleUrls: ['./dashboard.component.css']
  })
  export class DashboardComponent implements OnInit {

    heroes: Hero[] = [];

    constructor(private router: Router,
                private heroService: HeroService) { }

    ngOnInit() {
      this.heroService.getHeroes()
                      .then(heroes => this.heroes = heroes.slice(1, 5));
    }

    gotoDetail(hero: Hero) {
      const url = \`/heroes/\${hero.id}\`;
      this.router.navigateByUrl(url);
    }

    get title() {
      const count = this.heroes.length;
      return count === 0 ? 'No Heroes' : count === 1 ? 'Top Hero' : \`Top \${count} Heroes\`;
    }

  }


  `
};
testingp215 = {
  name: 'Dashboard Component Tests',
  code: `

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { addMatchers, click } from '../../testing';
import { HeroService } from '../model';
import { FakeHeroService } from '../model/testing';

import { DashboardComponent } from './dashboard.component';
import { DashboardModule } from './dashboard.module';

class RouterStub {
  navigateByUrl(url: string) {
    return url;
  }
}

beforeEach( addMatchers );

let component: DashboardComponent;
let fixture: ComponentFixture<DashboardComponent>;

//// deep ////
describe('DashboardComponent (deep)', () => {
  beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [ DashboardModule ]
        });
  });

  const clickForDeep = () => {
    const heroEl = fixture.debugElement.query(By.css('.hero'));
    click(heroEl);
  };

  compileAndCreate();
  tests(clickForDeep);

});



//// shallow ////
describe('DasboardComponent (shallow)', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ DashboardModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
});

const clickForShallow = () => {
const heroEl = fixture.debugElement.query(By.css('app-dashboard-hero'));
heroEl.triggerEventHandler('selected', component.heroes[0]);
};

compileAndCreate();
tests(clickForShallow);

});

function compileAndCreate() {
  beforeEach(async(() => {
        TestBed.configureTestingModule({
          providers: [
            { provide: HeroService, useClass: FakeHeroService },
            { provide: Router, useClass: RouterStub }
          ]
        })
        .compileComponents().then(() => {
              fixture = TestBed.createComponent(DashboardComponent);
              component = fixture.componentInstance;
        });
  }));
}

function tests(heroClick: Function) {

    it('should not have heroes before ngoninit', () => {
        expect(component.heroes.length).toBe(0,
        'should not have heroes before ngoninit');
    });

    it('should not have heroes immediately after ngoninit', () => {
        fixture.detectChanges(); // runs initial lifecycle hooks
        expect(component.heroes.length).toBe(0,
        'should not have heroes until service promise resolves');
    });

    describe('after get dashboard heroes', () => {
      // trigger component so it gets heroes and binds to them
      beforeEach(async(() => {
        fixture.detectChanges(); // runs ngoninit getheroes
        fixture.whenStable() // no need for lastpromise hack
        .then(() => fixture.detectChanges()); // bind to heroes
      }));

      it('should have heroes', () => {
        expect(component.heroes.length).toBeGreaterThan(0,
        'should have heroes after service promise resolves');
      });

      it('should display 4 heroes', () => {
          // find and examine heroes
          // look for them in the dom by css class
          const heroes = fixture.debugElement.queryAll(By.css('app-dashboard-hero'));
          expect(heroes.length).toBe(4, 'should display 4 heroes');
      });

      it('should tell router to navigate when hero clicked',
          inject([Router], (router: Router) => {
            const spy = spyOn(router, 'navigateByUrl');

            heroClick(); // trigger click onf first inner <div class="hero">

            // args passed to router.navigateByUrl()
            const navArgs = spy.calls.first().args[0];

            // expecting to navigate to id of the component's first hero
            const id = component.heroes[0].id;
            console.log(navArgs);
            console.log('/heroes/' + id);
            expect(navArgs).toBe('/heroes/' + id, 'should nav to herodetail for first hero');
          }));

    });

}

  `
};
testingp216 = {
  name: 'Twain Service',
  code: `

  import { Injectable } from '@angular/core';

  const quotes = [
    \`Always do the right thing. This will gratify some people and astonish the rest.\`,
    \`I have never let ym schooling interfere with my education.\`,
    \`Don't go around saying the world owes you a living. The world owes you nothing.
    It was here first.\`,
    \`Whenever you find yourself on the side of majority, it is time to pause and reflect.\`,
    \`If you tell the truth, you don't have to remember anything.\`,
    \`Clothes make the man. Naked people have little or no influence on society.\`,
    \`It's not the size of the dog in the fight, it's the size of the fight in the dog.\`,
    \`Truth is stranger than fiction, but it is because fiction is obliged to stick to
    possibilities; Truth isn't.\`,
    \`The man who does not read a good book has no advantage over the man who cannot
    read them.\`,
    \`Get your facts first, and then you can distort them as much as you please.\`
  ];

  @Injectable()
  export class TwainService {
    private next = 0;

    getQuote(): Promise<string> {
      return new Promise(resolve => {
        setTimeout(() => resolve(this.nextQuote()), 500);
      });
    }

    private nextQuote() {
      if (this.next === quotes.length) {
        this.next = 0;
      }
      return quotes[ this.next++ ];
    }

  }

  `
};
testingp217 = {
  name: 'Highlight Directive',
  code: `

  import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

  @Directive({
    selector: '[highlight]'
  })
  export class HighlightDirective implements OnChanges {
    @Input('highlight') bgColor: string;

    defaultColor = 'rgb(211, 211, 211)';

    constructor(private el: ElementRef) {
      el.nativeElement.style.customProperty = true;
     }

    ngOnChanges() {
      this.el.nativeElement.style.backgroundColor = this.bgColor || this.defaultColor;
    }

  }

  `
};
testingp218 = {
  name: 'Title Case Pipe',
  code: `

  import { Pipe, PipeTransform } from '@angular/core';

  @Pipe({
    name: 'titleCase', pure: false
  })
  export class TitleCasePipe implements PipeTransform {

    transform(input: string): string {
      return input.length === 0 ? '' :
             input.replace(/\w\S*/g,
              (txt => txt[0].toUpperCase() + txt.substr(1).toLowerCase() ));
    }

  }

  `
};
testingp219 = {
  name: 'Shared Module',
  code: `

  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormsModule } from '@angular/forms';

  import { HighlightDirective } from './highlight.directive';
  import { TitleCasePipe } from './title-case.pipe';
  import { TwainComponent } from './twain.component';

  @NgModule({
    imports: [
      CommonModule
    ],
    exports: [
      CommonModule,
      FormsModule,
      HighlightDirective,
      TitleCasePipe,
      TwainComponent
    ],
    declarations: [HighlightDirective, TitleCasePipe, TwainComponent]
  })
  export class SharedModule { }

  `
};
testingp220 = {
  name: 'Twain Component',
  code: `

  import { Component, OnInit } from '@angular/core';

  import { TwainService } from './twain.service';

  @Component({
    selector: 'app-twain-quote',
    template: \`
          <p class="twain"><i>{{ quote }}</i></p>
    \`
  })
  export class TwainComponent implements OnInit {
    intervalId: number;
    quote = '...';

    constructor(private twainService: TwainService) { }

    ngOnInit() {
      this.twainService.getQuote().then(quote => this.quote = quote);
    }

  }


  `
};
testingp221 = {
  name: 'Twain Component Tests',
  code: `

  import { async, ComponentFixture, TestBed } from '@angular/core/testing';
  import { fakeAsync, tick } from '@angular/core/testing';
  import { By } from '@angular/platform-browser';
  import { DebugElement } from '@angular/core';

  import { TwainComponent } from './twain.component';
  import { TwainService } from './twain.service';


  describe('TwainComponent', () => {
    let component: TwainComponent;
    let fixture: ComponentFixture<TwainComponent>;

    let spy: jasmine.Spy;
    let de: DebugElement;
    let el: HTMLElement;
    let twainService: TwainService; // actually injected service

    const testQuote = 'The will to win is nothing without the will to prepare.';


    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [ TwainComponent ],
        providers: [ TwainService ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(TwainComponent);
      component = fixture.componentInstance;

      // twainservice actually injected into component
      twainService = fixture.debugElement.injector.get(TwainService);

      // setup spy on \`getquote\` method
      spy = spyOn(twainService, 'getQuote').and.returnValue(Promise.resolve(testQuote));

      // get twain quote element by css selector (e.g. by class name)
      de = fixture.debugElement.query(By.css('.twain'));
      el = de.nativeElement;
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should not show quote before OnInit', () => {
      expect(el.textContent).toBe('', 'nothing displayed');
      expect(spy.calls.any()).toBe(false, 'getQuote not yet called');
    });

    it('should still not show quote after component initialized', () => {
      fixture.detectChanges();
      // getquote service is async => still has not returned with quote
      expect(el.textContent).toBe('...', 'no quote yet');
      expect(spy.calls.any()).toBe(true, 'getQuote called');
    });

    it('should show quote after getQuote promise (async)', async(() => {
      fixture.detectChanges();

      fixture.whenStable().then(() => { // wait for async getquote
          fixture.detectChanges();      // update view with quote
          expect(el.textContent).toBe(testQuote);
      });
    }));

    it('should show quote after getQuote promise (fakeAsync)', fakeAsync(() => {
        fixture.detectChanges();
        tick(); // wait for async getquote
        fixture.detectChanges();
        expect(el.textContent).toBe(testQuote);
    }));

    it('should show quote after getQuote promise (done)', (done: any) => {
      fixture.detectChanges();

      // get spy promise and wait for it to resolve
      spy.calls.mostRecent().returnValue.then(() => {
          fixture.detectChanges(); // update view with quote
          expect(el.textContent).toBe(testQuote);
          done();
      });
    });

  });

  `
};
testingp222 = {
  name: 'Welcome Component',
  code: `

  import { Component, OnInit } from '@angular/core';

  import { UserService } from './model/user.service';

  @Component({
    selector: 'app-welcome',
    template: \`
          <h3 class="welcome"><i>{{ welcome }}</i></h3>
    \`
  })
  export class WelcomeComponent implements OnInit {
    welcome = '--- not initialized yet ---';

    constructor(private userService: UserService) { }

    ngOnInit() {
      this.welcome = this.userService.isLoggedIn ?
      'Welcome, ' + this.userService.user.name : 'Please log in.';
    }

  }

  `
};
testingp223 = {
  name: 'Welcome Component Tests',
  code: `

  import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
  import { By } from '@angular/platform-browser';
  import { DebugElement } from '@angular/core';

  import { WelcomeComponent } from './welcome.component';
  import { UserService } from './model';

  describe('WelcomeComponent', () => {
    let component: WelcomeComponent;
    let fixture: ComponentFixture<WelcomeComponent>;
    let componentUserService: UserService; // actually injected service
    let userService: UserService; // testbed injected service
    let de: DebugElement; // debugelement with welcome message
    let el: HTMLElement; // dom element with welcome message

    let userServiceStub: {
      isLoggedIn: boolean;
      user: { name: string }
    };

    beforeEach(async(() => {
      // stub userservice for test purposes
      userServiceStub = {
        isLoggedIn: true,
        user: { name: 'Carmen Labelle' }
      };

      TestBed.configureTestingModule({
        declarations: [ WelcomeComponent ],
        providers: [ {provide: UserService, useValue: userServiceStub } ]
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(WelcomeComponent);
      component = fixture.componentInstance;
      // userservice actually injected into component
      userService = fixture.debugElement.injector.get(UserService);
      componentUserService = userService;
      // userservice from root injector
      userService = TestBed.get(UserService);

      // get welcome element by css selector (e.g. by class name)
      de = fixture.debugElement.query(By.css('.welcome'));
      el = de.nativeElement;

      // fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should welcome the user', () => {
      fixture.detectChanges();
      const content = el.textContent;
      expect(content).toContain('Welcome', '"Welcome ..."');
      expect(content).toContain('Carmen Labelle', 'expected name');
    });

    it('should welcome "Nils-Holger"', () => {
      userService.user.name = 'Nils-Holger'; // welcome message hasn't been shown yet
      fixture.detectChanges();
      expect(el.textContent).toContain('Nils-Holger');
    });

    it('should request login if not logged in', () => {
      userService.isLoggedIn = false; // welcome message hasn't been shown yet
      fixture.detectChanges();
      const content = el.textContent;
      expect(content).not.toContain('Welcome', 'not welcomed');
      expect(content).toMatch(/log in/i, '"log in"');
    });

    it(\`should inject the component's UserService instance\`, () => {
      inject([UserService], (service: UserService) => {
        expect(service).toBe(componentUserService);
      });
    });

    it('TestBed and Component UserService should be the same', () => {
      expect(userService === componentUserService).toBe(true);
    });

    it('stub object and injected UserService should not be the same', () => {
      expect(userServiceStub === userService).toBe(false);
      // changing stub object has no effect on injected service
      userServiceStub.isLoggedIn = false;
      expect(userService.isLoggedIn).toBe(true);
    });

  });

  `
};
testingp224 = {
  name: 'Testing Utilities: Global Jasmine',
  code: `

  import jasmineRequire from 'jasmine-core/lib/jasmine-core/jasmine.js';

  window['jasmineRequire'] = jasmineRequire;

  `
};
testingp225 = {
  name: 'Testing Utilities: Jasmine Matchers Definition',
  code: `

  declare namespace jasmine {
    interface Matchers<T> {
      toHaveText(actual: any, expectationFailOutput?: any): jasmine.CustomMatcher;
    }
  }

  `
};
testingp226 = {
  name: 'Testing Utilities: Jasmine Matchers Implementation',
  code: `

  /// <reference path="./jasmine-matchers.d.ts" />


  //// Jasmine Custom Matchers ////
  // be sure to extend jasmine-matchers.d.ts when adding matchers

  export function addMatchers(): void {
    jasmine.addMatchers({
      toHaveText: toHaveText
    });
  }

  function toHaveText(): jasmine.CustomMatcher {

    return {
      compare: function(actual: any,
                        expectedText: string,
                        expectationFailOutput?: any): jasmine.CustomMatcherResult {
              const actualText = elementText(actual);
              const pass = actualText.indexOf(expectedText) > -1;
              const message = pass ? '' : composeMessage();
              return { pass, message };

              function composeMessage() {
                const a = (actualText.length < 100 ? actualText :
                  actualText.substr(0, 100) + '...');
                const efo = expectationFailOutput ? \` '\${expectationFailOutput}'\` : '';
                return \`Expected element to have text content '\${expectedText}'
                        instead of '\${a}'\${efo}\`;
              }
      }
    };
  }

  function elementText(n: any): string {
    if (n instanceof Array) {
      return n.map(elementText).join('');
    }
    if (n.nodeType === Node.COMMENT_NODE) {
      return '';
    }
    if (n.nodeType === Node.ELEMENT_NODE && n.hasChildNodes()) {
      return elementText(Array.prototype.slice.call(n.childNodes));
    }
    if (n.nativeElement) {
      n = n.nativeElement;
    }
    return n.textContent;
  }

  `
};
testingp227 = {
  name: 'Testing Utilities: Router Stubs',
  code: `

  export { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';

  import { Component, Directive, Injectable, Input } from '@angular/core';
  import { NavigationExtras } from '@angular/router';


  @Directive({
    selector: '[routerLink]',
    host: {
      '(click)': 'onClick()'
    }
  })
  export class RouterLinkStubDirective {
    @Input('routerLink') linkParams: any;
    navigatedTo: any = null;

    onClick() {
      this.navigatedTo = this.linkParams;
    }
  }

  @Component({ selector: 'router-outlet', template: ''})
  export class RouterOutletStubComponent { }

  @Injectable()
  export class RouterStub {
    navigate(commands: any[], extras?: NavigationExtras) { }
  }

  // only implements params and part of snapshot.parammap
  import { BehaviorSubject } from 'rxjs/BehaviorSubject';
  import { convertToParamMap, ParamMap } from '@angular/router';

  @Injectable()
  export class ActivatedRouteStub {

    // activatedroute.parammap is observable
    private subject = new BehaviorSubject(convertToParamMap(this.testParamMap));
    paramMap = this.subject.asObservable();

    // test parameters
    private _testParamMap: ParamMap;
    get testParamMap() {
      return this._testParamMap;
    }
    set testParamMap(params: {}) {
      this._testParamMap = convertToParamMap(params);
      this.subject.next(this._testParamMap);
    }

    // activatedroute.snapshot.parammap
    get snapshot() {
      return { paramMap: this.testParamMap };
    }

  }

  `
};
testingp228 = {
  name: 'Testing Utilities: Barrel + More Utilities',
  code: `

  import { DebugElement } from '@angular/core';
  import { tick, ComponentFixture } from '@angular/core/testing';

  export * from './jasmine-matchers';
  export * from './router-stubs';


  //// short utilities ////

  /* wait a tick, then detect changes */
  export function advance(f: ComponentFixture<any>): void {
    tick();
    f.detectChanges();
  }

  //// create a custom dom event the old fashioned way ////
  export function newEvent(eventName: string, bubbles = false, cancelable = false) {
    const evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(eventName, bubbles, cancelable, null);
    return evt;
  }

  export const ButtonClickEvents = {
    left: { button: 0 },
    right: { button: 2 }
  };

  // simulate element click. defaults to mouse left-button click event
  export function click(el: DebugElement | HTMLElement,
                        eventObj: any = ButtonClickEvents.left): void {
      if (el instanceof HTMLElement) {
          el.click();
      } else {
          el.triggerEventHandler('click', eventObj);
      }
  }

  `
};
tsp229 = {
  name: 'Constant-Named Properties',
  code: `

  const Foo = 'Foo';
  const Bar = 'Bar';

  let x = {
    [Foo]: 100,
    [Bar]: 'hello world'
  };

  let a = x[Foo]; // type number
  let b = x[Bar]; // type string

  `
};
tsp230 = {
  name: 'Strict Class Initialization',
  code: `

  export class TypescriptComponent {

    foo: number;
    bar = 'hello world';
    baz: boolean;

    constructor() {
      this.foo = 42;
    }

  }

  `
};
tsp231 = {
  name: 'Fixed Length Tuples',
  code: `

  interface NumberStringTuple extends Array<number | string> {
    0: number;
    1: string;
    length: 2;
}

  `
};
tsp232 = {
  name: 'Optional Catch Clause Variables',
  code: `

  let input = '...';
  try {
    JSON.parse(input);
  }
  catch {
    console.log('invalid JSON ' + input);
  }

  `
};
tsp233 = {
  name: 'String Enums',
  code: `

  enum Colors {
    Red = 'RED',
    Blue = 'BLUE',
    Green = 'GREEN'
  }

  `
};
tsp234 = {
  name: 'Improved Inference For Generics',
  code: `

  function arrayMap<T, U>(f: (x: T) => U): (a: T[]) => U[] {
    return a => a.map(f);
  }

  const lengths: (a: string[]) => number[] = arrayMap(s => s.length);

  `
};
tsp235 = {
  name: 'Weak Type Detection',
  code: `

  interface Options {
    data?: string;
    timeout?: number;
    maxRetries?: number;
  }

  `
};
tsp236 = {
  name: 'Support For Mix-In Classes',
  code: `

  class Point {
    constructor(public x: number, public y: number) { }
  }

  class Person {
    constructor(public name: string) { }
  }

  type Constructor<T> = new(...args: any[]) => T;

  function Tagged<T extends Constructor<{}>>(Base: T) {
    return class extends Base {
      _tag: string;
      constructor(...args: any[]) {
        super(...args);
        this._tag = '';
      }
    };
  }

  const TaggedPoint = Tagged(Point);

  let point = new TaggedPoint(100, 200);
  point._tag = 'hello world';

  class Customer extends Tagged(Person) {
    accountBalance: number;
  }

  let customer = new Customer('John');
  customer._tag = 'test';
  customer.accountBalance = 1000000;


  `
};
tsp237 = {
  name: 'Object Type',
  code: `

  declare function create(obj: object | null): void;

  create({ property: 100 });
  create(null);

  `
};
tsp238 = {
  name: 'Keyof',
  code: `

  interface Person {
    name: string;
    age: number;
    location: string;
  }

  type Key1 = keyof Person;
  type Key2 = keyof Person[];
  type Key3 = keyof { [x: string]: Person };

  `
};
tsp239 = {
  name: 'Mapped Types',
  code: `

  interface Person {
    name: string;
    age: number;
    location: string;
  }

  interface PartialPerson {
    name?: string;
    age?: number;
    location?: string;
  }

  type Partial<T> = {
        [P in keyof T]?: T[P];
  };

  type PP = Partial<Person>;

  `
};
tsp240 = {
  name: 'Tagged Union Types',
  code: `

  interface Square {
    kind: 'square';
    size: number;
  }

  interface Rectangle {
    kind: 'rectangle';
    width: number;
    height: number;
  }

  interface Circle {
    kind: 'circle';
    radius: number;
  }

  type Shape = Square | Rectangle | Circle;

  function area(shape: Shape) {
    switch (shape.kind) {
      case 'square':
          return shape.size * shape.size;
      case 'rectangle':
          return shape.height * shape.width;
      case 'circle':
          return Math.PI * shape.radius * shape.radius;
    }
  }

  function test1(shape: Shape) {
    if (shape.kind === 'square') {
      shape;
    } else {
      shape;
    }
  }

  function test2(shape: Shape) {
    if (shape.kind === 'rectangle' || shape.kind === 'circle') {
      return;
    }
    shape;
  }

  `
};
tsp241 = {
  name: 'Type Parameters As Constraints',
  code: `

  function assign<T extends U, U>(target: T, source: U): T {
    for (let id in source) {
      target[id] = source[id];
    }
    return target;
  }

  `
};
tsp242 = {
  name: 'Async Await Support',
  code: `

  async function logDelayed(elements: string[]) {
    for (const element of elements) {
      await delay(200);
      console.log(element);
    }
  }

  async function delay(ms: number) {
    return new Promise<void>(resolve => {
            setTimeout(resolve, ms);
    });
  }

  logDelayed(['Hi', 'Baby', 'Beautiful', 'Asynchronous', 'Planet']).then(() => {
    console.log();
    console.log('Logged every element');
  });

  `
};
tsp243 = {
  name: 'This Typing',
  code: `

  class BasicCalculator {

    public constructor(protected value: number = 0) { }

    public currentValue(): number {
      return this.value;
    }

    public add(operand: number) {
      this.value += operand;
      return this;
    }

    public subtract(operand: number) {
      this.value -= operand;
      return this;
    }

    public multiply(operand: number) {
      this.value *= operand;
      return this;
    }

    public divide(operand: number) {
      this.value /= operand;
      return this;
    }

  }

  class ScientificCalculator extends BasicCalculator {

    public constructor(value = 0) {
      super(value);
    }

    public square() {
      this.value = this.value ** 2;
      return this;
    }

    public sin() {
      this.value = Math.sin(this.value);
      return this;
    }

    public cos() {
      this.value = Math.cos(this.value);
      return this;
    }

  }

  let value = new BasicCalculator(10).add(100).subtract(20).multiply(5)
                                     .divide(9).currentValue();
  let value1 = new ScientificCalculator(100).add(1000).sin().currentValue();

  `
};
tsp244 = {
  name: 'Abstract Classes/Methods Support',
  code: `

  abstract class Base {
    abstract getLaid(): string;
    getAGirlFriend() { return 'you sexy string ...'; }

  }

  class Derived extends Base {
    getLaid() {
      return 'super sex ... () => get married.';
    }

  }

    const x: Base = new Derived();
    console.log(x.getLaid());
    console.log(x.getAGirlFriend());
  `
};
tsp245 = {
  name: 'Generic Type Aliases',
  code: `

  type Lazy<T> = T | (() => T);

  let s: Lazy<string>;
  s = 'eager';
  s = () => 'lazy';

  interface Tuple<A, B> {
      a: A;
      b: B;

  }

  type Pair<T> = Tuple<T, T>;

  `
};
tsp246 = {
  name: 'Support For ES6 Generators',
  code: `

  function *g(): Iterable<string> {
    for (let i = 1; i < 4; i++) {
      yield 'hi baby ' + i;
    }
  }

  `
};
tsp247 = {
  name: 'Decorators',
  code: `

  class C {
    @readonly
    @enumerable(false)
    method() { }
  }

  function readonly(target, key, descriptor) {
    descriptor.writable = false;
  }

  function enumerable(value) {
    return function(target, key, descriptor) {
      descriptor.enumerable = value;
    };
  }

  `
};
tsp248 = {
  name: 'Union Types',
  code: `

  interface RunOptions {
    program: string;
    terminal: string[] | string | (() => string);
  }

  private options: RunOptions;

  this.options.terminal = 'hello world';
  this.options.terminal = ['hello', 'world'];
  this.options.terminal = () => 'hello world';


  function formatTerminal(c: string | string[]) {
    if (typeof c === 'string') {
      return c.trim();
    } else {
      return c.join(',');
    }
  }

  class Dog {
    woof() {}
  }

  class Cat {
    meow() {}
  }

  let pet: Dog | Cat;

  if (pet instanceof Dog) {
    pet.woof();
  } else {
    pet.meow();
  }

  type PrimitiveArray = Array<string | number | boolean>;
  type MyNumber = number;
  type callback = () => void;

  `
};
tsp249 = {
  name: 'Protected, Tuple Types',
  code: `

  class Female {
    protected protectHer() { }
  }

  class MyWife extends Female {
    public takeHerToTheMovies() {
      this.protectHer();
    }
  }

  let x: [string, number];
  x = ['hello', 100];

  const t = new MyWife();
  t.takeHerToTheMovies();

  `
};
tsp250 = {
  name: 'Basic Types',
  code: `

  let isDone: boolean = false;
  let decimal: number = 42;
  let hex: number = 0xf00d;
  let binary: number = 0b1010;
  let octal: number = 0o744;

  let color: string = 'red';

  let fullName: string = 'Nils-Holger Nägele';
  let age: number = 46;
  let sentence: string = \`Hello, my name is \${ fullName }.
  I'll be \${ age + 1 } years in 6 months.
  \`;

  let list: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

  let list1: Array<number> = [9, 10, 11, 12, 13, 14, 15, 16];

  let y: [string, number];
  y = ['hi', 42];
  console.log(y[0].substr(1));

  enum Color { Red, Green, Blue }
  let c: Color = Color.Red;
  let colorName: string = Color[0];
  console.log(colorName);

  let notSure: any = 6;
  notSure = 'she takes any and wants many ...';
  notSure = false;

  let list3: any[] = [1, true, 'free'];

  let someValue: any = 'this is a string';
  let strLength: number = (<string>someValue).length;
  let strLength1: number = (someValue as string).length;

  function greetUser(): void {
    console.log('welcome in the pleasure dome ...');
  }

  function error(message: string): never {
    throw new Error(message);
  }

  function infiniteLoop(): never {
    while (true) {

    }
  }


  `
};
tsp251 = {
  name: 'Variable Declarations',
  code: `

  let hello = 'Hello';
  console.log(theCityThatNeverSleepsAndProducesWorldsBestSoftware());

  for (let i = 1; i <= 1024; i++) {
    setTimeout(() =>  console.log(i), 100 * i);
  }

  const eternalLife = 1000;

  const input = [1, 2, 3, 4, 5];
  const [first, second, third, fourth, fifth] = input;
  console.log(third);
  console.log(fourth);
  f([100, 200]);

  let [firstEntry, ...rest] = [1, 2, 3, 4, 5];
  console.log(firstEntry);
  console.log(rest);

  const o = {
      a: 'foo',
      b: 42,
      c: 'bar'
  };
  const { a, b } = o;

  const winner = [1, 2];
  const firstLooser = [3, 4];

  const bothPlus = [0, ...winner, ...firstLooser, 5];

  const theCityThatNeverSleepsAndProducesWorldsBestSoftware = () => {
    let getCity;
    if (true) {
      let city = 'Seattle';
      getCity = () =>  city;
    }
    return getCity();
  };

  const f = ([first, second]: [ number, number]) => {
    console.log(first);
    console.log(second);
  };

  const keepWholeObject = (wholeObject: { a: string, b?: number }) => {
    const { a, b = 1001 } = wholeObject;
  };

  `
};
tsp252 = {
  name: 'Interfaces',
  code: `

  class Control {
    private state: any;
  }

  interface SelectableControl extends Control {
    select(): void;
  }

  class Button extends Control implements SelectableControl {
    select() { }
  }

  class Textbox extends Control {
    select() { }
  }

  class Location { }

  interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
  }

  function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = () => { };
    return counter;
  }

  let c = getCounter();
  c(10);
  c.reset();
  c.interval = 10.0;

  interface Shape {
    color: string;
  }

  interface PenStroke {
    penWidth: number;
  }

  interface Square extends Shape, PenStroke {
    sideLength: number;
  }

  let square = <Square>{};
  square.color = 'red';
  square.sideLength = 10;
  square.penWidth = 6.0;

  interface ClockConstructor {
    new (hour: number, minute: number, second: number): ClockInterface;
  }

  interface ClockInterface {
    tick();
  }

  const createClock = (ctor: ClockConstructor,
                       hour: number,
                       minute: number,
                       second: number): ClockInterface => {
    return new ctor(hour, minute, second);
  };

  class DigitalClock implements ClockInterface {
    constructor(h: number, m: number, s: number) { }
    tick() {
      console.log('beep beep');
    }
  }

  class AnalogClock implements ClockInterface {
    constructor(h: number, m: number, s: number) { }
    tick() {
      console.log('tick tock');
    }
  }

  let digital = createClock(DigitalClock, 7, 15, 0);
  let analog = createClock(AnalogClock, 12, 55, 59);

  interface SearchFunc {
    search?: string;
    (source: string, subString: string): boolean;
  }

  const mySearch: SearchFunc = (src: string, sub: string) => {
                  let result = src.search(sub);
                  return result > -1;
  };


  interface SquareConfig {
    color?: string;
    width?: number;
  }

  const createSquare = (config: SquareConfig): { color: string, area: number } => {
    let color = config.color ? config.color : 'red';
    let area = config.width ? Math.pow(config.width, 2) : 100;
    return { color, area };
  };

  let mySquare = createSquare({ color: 'green', width: 10 });


  interface Point {
    readonly x: number;
    readonly y: number;
  }

  let p1: Point = { x: 8, y: 16 };

  `
};
tsp253 = {
  name: 'Classes',
  code: `
  class Point {
    a: number;
    b: number;

  }

  interface Point3D extends Point {
    c: number;
  }

  let point3D: Point3D = { a: 1, b: 2, c: 3 };

  class Greeter {
    greeting: string;
    constructor(message: string) {
      this.greeting = message;
    }
    greet() {
      return 'Hello ' + this.greeting;
    }
  }

  let greeter: Greeter;
  greeter = new Greeter('World');
  console.log(greeter.greet());

  abstract class Department {
    constructor(public name: string) { }

    printName(): void {
      console.log('Department name is: ' + this.name);
    }

    abstract printMeeting(): void;

  }

  class EngineeringDepartment extends Department {

    constructor() {
      super('Software Engineering');
     }

     printMeeting() {
     console.log('The Engineering Department meets each Morning at 4:00 AM');
     }

     generateCharts(): void {
       console.log('Generating Velocity and Burndown charts ...');
     }
  }

  let department: Department;
  department = new EngineeringDepartment();
  department.printName();
  department.printMeeting();

  class Grid {

    static origin = { x: 0, y: 0 };

    constructor(public scale: number) {

    }

    calculateDistanceFromOrigin(point: { x: number; y: number; }) {
      let xDist = (point.x - Grid.origin.x);
      let yDist = (point.y - Grid.origin.y);
      return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }

  }

  let grid1 = new Grid(1.0);
  let grid2 = new Grid(5.0);
  console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
  console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));

  const passcode = 'secret_passcode';

  class Employee {
    private _fullName: string;

    get fullName(): string {
      return this._fullName;
    }

    set fullName(newName: string) {
      if (passcode && passcode === 'secret_passcode') {
        this._fullName = newName;
      } else {
        console.log('Error: Unauthorized update of employee!');
      }
    }

  }

  let employee = new Employee();
  employee.fullName = 'John Blow';
  if (employee.fullName) {
    console.log(employee.fullName);
  }


  class Animal {
    name: string;
    constructor(theName: string) {
      this.name = theName;
    }
    move(distanceInMeters: number = 0) {
      console.log(\`\${this.name} moved \${distanceInMeters}m.\`);
    }
  }

  class Snake extends Animal {
    constructor(name: string) {
      super(name);
    }
    move(distanceInMeters = 10) {
      console.log('Slithering ...');
      super.move(distanceInMeters);
    }
  }

  class WorkStallion extends Animal {
    constructor(name: string) {
      super(name);
    }
    move(distanceInMeters = 150) {
      console.log('Galloping ...');
      super.move(distanceInMeters);
    }

  }

  let nils = new Snake('Nils the Cobra');
  let wally = new WorkStallion('Wally the Racer');

  nils.move();
  wally.move(200);

  `
};
tsp254 = {
  name: 'Functions',
  code: `

  function add(x: number, y: number): number {
    return x + y;
  }

  let myAdd = (x: number, y: number): number => x + y;

  let z = 100;

  function addToZ(x, y) {
    return x + y + z;
  }

  function buildName(firstName: string, lastName: string): string {
    return firstName + ' ' + lastName;
  }

  let result1 = buildName('Mary', 'Fox');

  const buildName1 = (firstName: string, lastName?: string): string =>  {
              return lastName ? firstName + ' ' + lastName : firstName;
  };

  const buildName2 = (firstName: string, lastName = 'Blow'): string => firstName + lastName;

  const buildName3 = (firstName = 'Will', lastName: string): string => firstName + lastName;

  function buildName4(firstName: string, ...restOfNames: string[]) {
    return firstName + ' ' + restOfNames.join(' ');
  }

  let employeeNames = buildName4('Joseph', 'Samuel', 'Lucas', 'Alice');

  let buildNameFun: (fname: string, ...rest: string[]) => string = buildName4;

  let deck = {
          suits: ['hearts', 'spades', 'clubs', 'diamonds'],
          cards: Array(52),
          createCardPicker: function() {
            return () => {
              let pickedCard = Math.floor(Math.random() * 52);
              let pickedSuit = Math.floor(pickedCard / 13);
              return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
            };
          }
  };

  let cardPicker = deck.createCardPicker();
  let pickedCard = cardPicker();
  console.log('card: ' + pickedCard.card + ' of ' + pickedCard.suit);

  interface Card {
    suit: string;
    card: number;
  }

  interface Deck {
    suits: string[];
    cards: number[];
    createCardSelector(this: Deck): () => Card;
  }

  const decker: Deck = {
            suits: ['hearts', 'spades', 'clubs', 'diamonds'],
            cards: Array(52),
            createCardSelector: function(this: Deck) {
              return () => {
                let selectedCard = Math.floor(Math.random() * 52);
                let selectedSuit = Math.floor(selectedCard / 13);

                return { suit: this.suits[selectedSuit], card: selectedCard % 13 };
              };
            }
  };

  let cardSelector = decker.createCardSelector();
  let selectedCard = cardSelector();

  console.log('card: ' + selectedCard.card + ' of ' + selectedCard.suit);

  `
};
tsp255 = {
  name: 'Generics',
  code: `

  class BeeKeeper {
    hasMask: boolean;
  }

  class ZooKeeper {
    nameTag: string;
  }

  class Animal {
    numberLegs: number;
  }

  class Bee extends Animal {
    keeper: BeeKeeper;
  }

  class Giraffe extends Animal {
    keeper: ZooKeeper;
  }

  const createInstance = <A extends Animal>(c: new () => A): A => new c();

  createInstance(Giraffe).keeper.nameTag;
  createInstance(Bee).keeper.hasMask;

  const getProperty = <T, K extends keyof T>(obj: T, key: K) => obj[key];


  let x = { a: 10, b: 20, c: 30, d: 40 };

  console.log(getProperty(x, 'c'));

  interface LengthWise {
    length: number;
  }

  function loggingIdentity<T extends LengthWise>(arg: T): T {
    console.log(arg.length);
    return arg;
  }

  console.log(loggingIdentity({length: 10, value: 3}));

  class GenericNumber<T> {
      zeroValue: T;
      add: (x: T, y: T) => T;
  }


  let myGenericNumber = new GenericNumber<number>();
  myGenericNumber.zeroValue = 0;
  myGenericNumber.add = (a, b) => a + b;

  console.log(myGenericNumber.add(myGenericNumber.zeroValue, 42));

  interface GenericIdentityFn<T> {
    search?: T;
    (arg: T): T;
  }

  const identity = <T>(arg: T): T => arg;

  let myIdentity: GenericIdentityFn<number> = identity;

  console.log(identity<string>('herString'));
  console.log(identity<number>(42));
  console.log(identity<boolean>(true));
  console.log(identity<any>('she wants many ...'));


  `
};
tsp256 = {
  name: 'Enums',
  code: `

  const enum Directions { North, South, East, West }

  let directions = [ Directions.North, Directions.South, Directions.East, Directions.West ];

  enum E {
    X, Y, Z
  }

  const f = (obj: { X: number }) => obj.X;

  console.log(f(E));

  enum ShapeKind {
    Circle,
    Square
  }

  interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
  }

  interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
  }

  let c: Circle = {
    kind: ShapeKind.Circle,
    radius: 15
  };

  enum FileAccess {
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    G = 'ABC'.length
  }

  console.log(FileAccess.Write + '' + FileAccess.Read);

  enum Direction {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
  }

  console.log(Direction.Right);

  `
};
tsp257 = {
  name: 'Iterators and Generators',
  code: `

  let someArray = [1, 'string', true];

  for (let entry of someArray) {
    console.log(entry);
  }

  for (let entry in someArray) {
    if (someArray.hasOwnProperty(entry)) {
    console.log(entry);
    }
  }

  let pets = new Set(['Dog', 'Cat', 'Rabbit']);
  pets['species'] = 'mammals';

  for (let pet in pets) {
    if (pets.hasOwnProperty(pet)) {
    console.log(pet);
    }
  }

  let numbers = [1, 13, 33, 71, 100];
  for (let num of numbers) {
    console.log(num);
  }


  `
};
tsp258 = {
  name: 'Decorators',
  code: `

  import 'reflect-metadata';

  function c() {
    console.log('c(): evaluated');
    return function(target, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log('c(): called');
    };
  }

  function p() {
    console.log('p(): evaluated');
    return function(target, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log('p(): called');
    };
  }

  class C {
      @c()
      @p()
      method() { }
  }


  @sealed
  class Greeter {
    greeting: string;
    constructor(message: string) {
      this.greeting = message;
    }
    @enumerable(false)
    greet() {
      return 'Hey, ' + this.greeting;
    }
  }

  function enumerable(value: boolean) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      descriptor.enumerable = value;
    };
  }

  function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
  }

  console.log(new Greeter('Marie').greet());

  function classDecorator<T extends { new(...args: any[]): {}}>(constructor: T) {
    return class extends constructor {
      newProperty = 'new property';
      hello = 'override';
    };
  }

  @classDecorator
  class Greeter1 {
    property = 'property';
    hello: string;
    constructor(msg: string) {
      this.hello = msg;
    }
  }

  console.log(new Greeter1('world'));


  class Point {
        private _x: number;
        private _y: number;

        constructor(x: number, y: number) {
          this._x = x;
          this._y = y;
        }

        @configurable(false)
        get x() { return this._x; }

        @configurable(false)
        get y() { return this._y; }
  }

  function configurable(value: boolean) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      descriptor.configurable = value;
    };
  }

  console.log(new Point(1, 10).x);

  class Greeter2 {
    @format('Hello, %s')
    greeting: string;

    constructor(message: string) {
      this.greeting = message;
    }

    greet() {
      let formatString = getFormat(this, 'greeting');
      return formatString.replace('%s', this.greeting);
    }
  }

  const formatMetadataKey = Symbol('format');

  function format(formatString: string) {
    return Reflect.metadata(formatMetadataKey, formatString);
  }
  function getFormat(target: any, propertyKey: string) {
    return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
  }

  class Greeter3 {
    greeting: string;
    constructor(message: string) {
      this.greeting = message;
    }
    @validate
    greet(@required name: string) {
      return 'Hey, ' + name + ', ' + this.greeting;
    }
  }

  const requireMetadataKey = Symbol('required');

  function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
    let existingRequiredParameters: number[] = Reflect.getOwnMetadata(requireMetadataKey,
    target, propertyKey) || [];
    existingRequiredParameters.push(parameterIndex);
    Reflect.defineMetadata(requireMetadataKey, existingRequiredParameters,
      target, propertyKey);
  }

  function validate(target: any, propertyName: string,
                    descriptor: TypedPropertyDescriptor<Function>) {
                      let method = descriptor.value;
                      descriptor.value = function() {
                        let requiredParameters: number[] =
                                                Reflect.getOwnMetadata(requireMetadataKey,
                        target, propertyName);
                        if (requiredParameters) {
                            for (let parameterIndex of requiredParameters) {
                              if (parameterIndex >= arguments.length ||
                                arguments[parameterIndex] === undefined) {
                                  throw new Error('Missing required argument.');
                                }
                            }
                        }
                        return method.apply(this, arguments);
                      };
                    }
  console.log(new Greeter3('what\'s up?').greet('Nils-Holger'));

  class Point1 {
    x: number;
    y: number;
  }

  class Line {
    private _p0: Point;
    private _p1: Point;

    @validate1
    set p0(value: Point) { this._p0 = value; }
    get p0() { return this._p0; }

    @validate1
    set p1(value: Point) { this._p1 = value; }
    get p1() { return this._p1; }

  }

  function validate1<T>(target: any, propertyKey: string,
    descriptor: TypedPropertyDescriptor<T>) {
    let set = descriptor.set;
    descriptor.set = function(value: T) {
      let type = Reflect.getMetadata('design:type', target, propertyKey);
      if (!(value instanceof type)) {
        throw new TypeError('Invalid type.');
      }
      set(value);
    };
  }

  `
};
apip259 = {
  name: 'Currency Pipe',
  code: `

  import { Component } from '@angular/core';

  @Component({
    selector: 'app-ng-api',
    template: \`
            <h1>Currency Pipe</h1>

            <p>A: {{ a | currency }}</p>

            <p>A: {{ a | currency:'EUR' }}</p>

            <p>A: {{ a | currency:'EUR':'code' }}</p>

            <p>B: {{ b | currency:'EUR':'symbol':'4.2-2' }}</p>

            <p>B: {{ b | currency:'EUR':'symbol-narrow':'4.2-2' }}</p>

            <p>B: {{ b | currency:'EUR':'symbol':'4.2-2':'de' }}</p>

    \`
  })
  export class ApiComponent {

    a: number = 0.259;
    b: number = 1.3495;

  }

  `
};
apip260 = {
  name: 'JSON Pipe',
  code: `

  import { Component } from '@angular/core';

  @Component({
    selector: 'app-ng-api',
    template: \`
            <h1>JSON Pipe</h1>

              <div>
                <p>Without JSON pipe:</p>
                <pre>{{ object }}</pre>
                <p>With JSON pipe:</p>
                <pre>{{ object | json }}</pre>
              </div>

    \`
  })
  export class ApiComponent {

    object: Object = { foo: 'bar', baz: 'qux',
                       nested: { xyz: 33, numbers: [1, 2, 3, 4, 5, 6]}};

  }

  `
};
apip261 = {
  name: 'Lower/UpperCase Pipe',
  code: `

  import { Component } from '@angular/core';

  @Component({
    selector: 'app-ng-api',
    template: \`
            <h1>Lower/Uppercase Pipe</h1>
             <div>
                <label>Name: </label><input #name (keyup)="change(name.value)" type="text">
                <p>In lowercase: <pre>'{{ value | lowercase }}'</pre>
                <p>In uppercase: <pre>'{{ value | uppercase }}'</pre>
            </div>
    \`
  })
  export class ApiComponent {

    value = 'Hi baby';
    change(value: string) {
      this.value = value;
    }

  }

  `
};
apip262 = {
  name: 'NgForOf Directive',
  code: `

  import { Component } from '@angular/core';

  import { Observable } from 'rxjs/Observable';
  import 'rxjs/add/observable/from';

  @Directive({
    selector: '[ngFor][ngForOf]'
  })
  class NgForOf<T> implements DoCheck, OnChanges {
    ngForOf: NgIterable<T>
    ngForTrackBy: TrackByFunction<T>
    set ngForTemplate: TemplateRef<NgForOfContext<T>>
    ngOnChanges(changes: SimpleChanges): void
    ngDoCheck(): void
  }

  @Component({
    selector: 'app-ng-api',
    template: \`
            <h1>NgForOf Directive</h1>
             <div>
                    <ul>
                        <li *ngFor="let user of userObservable | async as users;
                                    index as i; first as isFirst;">
                            {{ i + 1 }}/{{ users.length}}.{{ user }}
                            <span *ngIf="isFirst">default</span>
                        </li>
                    </ul>
                    <ul>
                          <li *ngFor="let item of items; index as i; trackBy: trackByFn">
                                 {{ i }} {{ item }}
                          </li>
                    </ul>

                    <div *ngFor="let hero of heroes; let i = index; let odd = odd;
                    trackBy: trackById;" [class.odd]="odd">
                      ({{ i }}) {{ hero.name }}
                    </div>

                    <ng-template ngFor let-hero [ngForOf]="heroes" let-i="index"
                    let-odd="odd" [ngForTrackBy]="trackById">
                      <div [class.odd]="odd">
                          ({{ i }}) {{ hero.name }}
                      </div>
                    </ng-template>

            </div>
    \`
  })
  export class ApiComponent {

    private names = ['Flash', 'Wonderwoman', 'Superman', 'Spiderman', 'Green Arrow'];
    heroes = [{ name: 'Nils' }, { name: 'Carmen' }, { name: 'Igor' }, { name: 'Misko'},
    { name: 'Hans' }, { name: 'Alex' }, { name: 'Rob' },
    { name: 'Stephen' }, { name: 'Tobias'}];
    items = ['Computer', 'Mobile Device', 'Watch', 'Chromebook'];

    userObservable: Observable<string[]>;


    constructor() {
      this.userObservable = Observable.from([this.names]);
    }

    trackByFn(idx: number, item: any) {
      console.log(idx, item);
    }

    trackById(id: number, hero: any) {
      console.log(id, hero);
    }

  }

  `
};
apip263 = {
  name: 'NgPlural Directive',
  code: `

  import { Component } from '@angular/core';
  import { NgPlural } from '@angular/common';


  @Component({
    selector: 'app-ng-api',
    template: \`
            <h1>NgPlural Directive</h1>
            <div [ngPlural]="value">
                  <ng-template ngPluralCase="0">there is nothing</ng-template>
                  <ng-template ngPluralCase="1">there is one</ng-template>
                  <ng-template ngPluralCase="2">there are a couple</ng-template>
            </div>
    \`
  })
  export class ApiComponent {

        values = [0, 1, 2];
        value = this.values[2];

  }

  `
};
apip264 = {
  name: 'NgSwitch Directive',
  code: `

  import { Component } from '@angular/core';


  @Component({
    selector: 'app-ng-api',
    template: \`
            <h1>NgSwitch Directive</h1>
              <ng-container [ngSwitch]="hero?.emotion">
                  <div *ngSwitchCase="'happy'">{{ hero.name }} is {{ hero.emotion}}.</div>
                  <div *ngSwitchCase="'angry'">{{ hero.name }} is {{ hero.emotion}}.</div>
                  <div *ngSwitchCase="'indifferent'">{{ hero.name }} is {{ hero.emotion}}.
                  </div>
                  <div *ngSwitchDefault>no emotions.</div>
              <ng-container>

    \`
  })
  export class ApiComponent {

        hero = { name: 'Flash', emotion: 'indifferent' };

  }

  `
};
apip265 = {
  name: 'Async Pipe',
  code: `

  import { Component } from '@angular/core';

  import { Observable } from 'rxjs/Observable';
  import { Subscriber } from 'rxjs/Subscriber';


  @Component({
    selector: 'app-ng-api',
    template: \`
            <h1>Async Pipe</h1>
                <div>
                    <code>observable | async</code>:
                    Time: {{ time | async }}

                </div>
              <div>
                  <code>promise | async</code>:
                  <button (click)="clicked()">
                      {{ arrived ? 'Reset' : 'Resolve' }}
                  </button>
                  <span>Wait for it ... {{ greeting | async }}</span>
              </div>
    \`
  })
  export class ApiComponent {
      time = new Observable<string>((observer: Subscriber<string>) => {
          setInterval(() => observer.next(new Date().toString()), 1000);
      });


      greeting: Promise<string> | null = null;
      arrived: boolean = false;

      private resolve: Function | null = null;

      constructor() {
        this.reset();
      }

      reset() {
        this.arrived = false;
        this.greeting = new Promise<string>((resolve, reject) => { this.resolve = resolve; });
      }

      clicked() {
        if (this.arrived) {
          this.reset();
        } else {
          this.resolve !('hi baby!!!');
          this.arrived = true;
        }
      }


  }



  `
};
apip266 = {
  name: 'Date Pipe',
  code: `

  import { Component } from '@angular/core';

  @Component({
    selector: 'app-ng-api',
    template: \`
            <h1>Date Pipe</h1>

            <p>Today is {{ today | date }}</p>
            <p>Or if you prefer, {{ today | date:'fullDate' }}</p>
            <p>The time is {{ today | date:'shortTime' }}</p>
            <p>The full date/time is {{ today | date:'full' }}</p>
            <p>The full date/time in german is: {{ today | date:'full':'':'de' }}</p>
            <p>The custom date is {{ today | date:'dd-MM-yyyy HH:mm:ss a z':'+0100' }}</p>
            <p>The custom date with fixed timezone is
            {{ fixedTimezone | date:'dd-MM-yyyy HH:mm:ss a z':'+0100' }}</p>
    \`
  })
  export class ApiComponent {
    today = Date.now();
    fixedTimezone = '2018-02-20T11:35:42+0100';

  }


  `
};
apip267 = {
  name: 'NgClass Directive',
  code: `

  import { Component } from '@angular/core';


  @Component({
    selector: 'app-ng-api',
    template: \`
            <h1>NgClass Directive</h1>
            <div [ngClass]="currentClasses">
                This div is initially saveable, unchanged and special.
            </div>

    \`,
    styles: [\`.saveable { font-size: 150%; }
              .modified { background-color: yellow; }
              .special { color: red; }
            \`]
  })
  export class ApiComponent {
        currentClasses: {};
        canSave = true;
        isUnchanged = true;
        isSpecial = true;

        constructor() {
          this.setCurrentClasses();
        }

        setCurrentClasses() {
          this.currentClasses = {
            'saveable': this.canSave,
            'modified': !this.isUnchanged,
            'special': this.isSpecial
          };
        }

  }

  `
};
apip268 = {
  name: 'Percent Pipe',
  code: `

  import { Component } from '@angular/core';


  @Component({
    selector: 'app-ng-api',
    template: \`
            <h1>Percent Pipe</h1>
            <p>A: {{ a | percent }}</p>
            <p>B: {{ b | percent:'4.3-5' }}</p>
            <p>B: {{ b | percent:'4.3-5':'de' }}</p>
    \`
  })
  export class ApiComponent {
        a: number = 0.259;
        b: number = 1.3495;

  }

  `
};
apip269 = {
  name: 'Decimal Pipe',
  code: `

  import { Component } from '@angular/core';


  @Component({
    selector: 'app-ng-api',
    template: \`
            <h1>Decimal Pipe</h1>
            <p>e (no formatting): {{ e | number }}</p>
            <p>e (3.1-5): {{ e | number:'3.1-5' }}</p>
            <p>e (4.5-5): {{ e | number:'4.5-5' }}</p>
            <p>e (german): {{ e | number:'4.5-5':'de' }}</p>

            <p>pi (no formatting): {{ pi | number }}</p>
            <p>pi (3.1-5): {{ pi | number:'3.1-5' }}</p>
            <p>pi (3.5-5): {{ pi | number:'3.5-5' }}</p>

    \`
  })
  export class ApiComponent {
        pi: number = 3.14;
        e: number = 2.718281828459045;

  }

  `
};
apip270 = {
  name: 'NgIf Directive',
  code: `

  import { Component } from '@angular/core';


  @Component({
    selector: 'app-ng-api',
    template: \`
            <h1>NgIf Directive</h1>
            <button (click)="show = !show">{{ show ? 'hide' : 'show' }}</button>
            show = {{ show }}
            <br>
            <div *ngIf="show; else elseBlock">Text to show</div>
            <ng-template #elseBlock>Alternate text while primary text is hidden</ng-template>
    \`
  })
  export class ApiComponent {
          show: boolean = true;

  }

*****************************************************************

import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';


@Component({
  selector: 'app-ng-api',
  template: \`
          <h1>NgIf Directive</h1>
          <button (click)="show = !show">{{ show ? 'hide' : 'show' }}</button>
          <button (click)="switchPrimary()">Switch Primary</button>
          show = {{ show }}
          <br>
          <div *ngIf="show; then thenBlock; else elseBlock">this is ignored</div>
          <ng-template #primaryBlock>Primary text to show</ng-template>
          <ng-template #secondaryBlock>Secondary text to show</ng-template>
          <ng-template #elseBlock>Alternate text while primary text is hidden</ng-template>
  \`
})
export class ApiComponent implements OnInit {
        thenBlock: TemplateRef<any> | null = null;
        show: boolean = true;

        @ViewChild('primaryBlock')
        primaryBlock: TemplateRef<any> | null = null;
        @ViewChild('secondaryBlock')
        secondaryBlock: TemplateRef<any> | null = null;

        switchPrimary() {
          this.thenBlock = this.thenBlock === this.primaryBlock ?
                           this.secondaryBlock : this.primaryBlock;
        }

        ngOnInit() {
          this.thenBlock = this.primaryBlock;
        }

}

*****************************************************************

import { Component } from '@angular/core';

import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-ng-api',
  template: \`
          <h1>NgIf Directive</h1>
          <button (click)="nextUser()">Next User</button>
          <br>
          <div *ngIf="userObservable | async as user; else loading;">
              Hello {{ user.last }}, {{ user.first }}!
          </div>
          <ng-template #loading let-user>Waiting ...
                                (user is {{ user | json }} )</ng-template>
  \`
})
export class ApiComponent {
        userObservable = new Subject<{first: string, last: string}>();
        first = ['Nils', 'Carmen', 'Igor', 'Misko', 'Angular'];
        firstIndex = 0;
        last = ['Nägele', 'Popoviciu', 'Minar', 'Hevery', '5'];
        lastIndex = 0;

        nextUser() {
          let first = this.first[this.firstIndex++];
          if (this.firstIndex >= this.first.length) {
            this.firstIndex = 0;
          }
          let last = this.last[this.lastIndex++];
          if (this.lastIndex >= this.last.length) {
            this.lastIndex = 0;
          }
          this.userObservable.next({first, last});
        }

}

  `
};
apip271 = {
  name: 'NgStyle Directive',
  code: `

  import { Component } from '@angular/core';


  @Component({
    selector: 'app-ng-api',
    template: \`
            <h1>NgStyle Directive</h1>

            <div [style.font-size]="isSpecial ? 'x-large' : 'smaller'">
                  This div is x-large.
            </div>

            <div [ngStyle]="currentStyles">
                  This div is initially italic, normal weight and x-large (24px).
            </div>


    \`
  })
  export class ApiComponent {
        isSpecial = true;
        canSave = true;
        isUnchanged = true;

        currentStyles = {
              'font-style': this.canSave ? 'italic' : 'normal',
              'font-weight': !this.isUnchanged ? 'bold' : 'normal',
              'font-size': this.isSpecial ? '24px' : '12px'
        };

  }

  `
};
apip272 = {
  name: 'ViewChildren Decorator',
  code: `

    import { Component, Directive, Input,
    QueryList, ViewChildren, AfterViewInit } from '@angular/core';


    @Directive({
        selector: 'app-pane'
    })
    export class PaneDirective {
    @Input() id: string;
  }


    @Component({
        selector: 'app-ng-api',
        template: \`
                      <h1>ViewChildren Decorator</h1>
                      <app-pane id="1"></app-pane>
                      <app-pane id="2"></app-pane>
                      <app-pane id="3" *ngIf="shouldShow"></app-pane>
                      <button (click)="show()">Show 3</button>
                      <div>panes: {{ serializedPanes }}</div>

              \`
          })
          export class ApiComponent implements AfterViewInit {
          @ViewChildren(PaneDirective) panes: QueryList<PaneDirective>;
          serializedPanes: string = '';

          shouldShow = false;

          show() {
              this.shouldShow = true;
          }

          ngAfterViewInit() {
          this.calculateSerializedPanes();
          this.panes.changes.subscribe((r) => { this.calculateSerializedPanes(); });
          }

          calculateSerializedPanes() {
          setTimeout(() =>
                { this.serializedPanes = this.panes.map(p => p.id).join(', '); }, 0);
          }

      }


  `
};
apip273 = {
  name: 'ContentChild Decorator',
  code: `

  import { Component, Directive, Input, ContentChild } from '@angular/core';


  @Directive({
    selector: 'app-pane'
  })
  export class PaneDirective {
    @Input() id: string;
  }

  @Component({
    selector: 'app-tab',
    template: \`
            <div>pane: {{ pane?.id }}</div>
    \`
  })
  export class TabComponent {
    @ContentChild(PaneDirective) pane: PaneDirective;
  }


  @Component({
    selector: 'app-ng-api',
    template: \`
            <h1>ContentChild Decorator</h1>
            <app-tab>
              <app-pane id="1" *ngIf="shouldShow"></app-pane>
              <app-pane id="2" *ngIf="!shouldShow"></app-pane>
            </app-tab>

            <button (click)="toggle()">Toggle</button>
    \`
  })
  export class ApiComponent {
          shouldShow = true;

          toggle() {
            this.shouldShow = !this.shouldShow;
          }

  }

  `
};
apip274 = {
  name: 'Directive Decorator',
  code: `

  import { Component, Input } from '@angular/core';


  @Component({
    selector: 'app-bank-account',
    template: \`
            Bank Name: {{ bankName }}
            Account ID: {{ id }}
    \`
  })
  export class BankAccountComponent {
    @Input('bank-name') bankName: string;
    @Input('account-id') id: string;

  }


  @Component({
    selector: 'app-ng-api',
    template: \`
            <h1>Directive Decorator</h1>
            <app-bank-account bank-name='ABC' account-id="123"></app-bank-account>
    \`
  })
  export class ApiComponent { }

  *****************************************************************

  import { Component, Directive, Output, EventEmitter } from '@angular/core';


  @Directive({
    selector: 'app-interval-dir'
  })
  export class IntervalDirective {
    @Output() everySecond = new EventEmitter();
    @Output('everyFiveSeconds') five5Seconds = new EventEmitter();

    constructor() {
      setInterval(() => this.everySecond.emit('event'), 1000);
      setInterval(() => this.five5Seconds.emit('event'), 5000);
    }

  }


  @Component({
    selector: 'app-ng-api',
    template: \`
            <h1>Directive Decorator</h1>
            <app-interval-dir (everySecond)="everySecond()"
            (everyFiveSeconds)="everyFiveSeconds()">
            </app-interval-dir>
    \`
  })
  export class ApiComponent {

    everySecond() {
      console.log('second');
    }

    everyFiveSeconds() {
      console.log('five seconds');
    }

  }

  *****************************************************************

  import { Component, Directive } from '@angular/core';


  @Directive({
    selector: 'button[counting]',
    host: {
    '(click)': 'onClick($event.target)'
    }
  })
  export class CountClicksDirective {
      numberOfClicks = 0;

      onClick(btn) {
        console.log('button', btn, 'number of clicks: ', this.numberOfClicks++);
      }

  }


@Component({
  selector: 'app-ng-api',
  template: \`
          <h1>Directive Decorator</h1>
          <button counting>Increment</button>
  \`
})
export class ApiComponent {

}

*****************************************************************

import { Component, Directive } from '@angular/core';
import { NgModel } from '@angular/forms';


@Directive({
  selector: '[ngModel]',
  host: {
    '[class.valid]': 'valid',
    '[class.invalid]' : 'invalid'
  }
})
export class NgModelStatusDirective {

  constructor(public control: NgModel) { }

  get valid() { return this.control.valid; }
  get invalid() { return this.control.invalid; }

}


@Component({
  selector: 'app-ng-api',
  template: \`
          <h1>Directive Decorator</h1>
          <input [(ngModel)]="prop">
  \`
})
export class ApiComponent {
    prop: any;
}


*****************************************************************

import { Component, Directive } from '@angular/core';


@Directive({
  selector: '[my-button]',
  host: {
    'role': 'button'
  }
})
export class MyButtonDirective {

}


@Component({
  selector: 'app-ng-api',
  template: \`
          <h1>Directive Decorator</h1>
          <div my-button>My Button</div>
  \`
})
export class ApiComponent {

}


*****************************************************************

import { Component, Directive, ElementRef, HostListener } from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
      @HostListener('mouseenter') onMouseEnter() {
        this.highlight('red');
      }

      @HostListener('mouseleave') onMouseLeave() {
        this.highlight('yellow');
      }

      constructor(private el: ElementRef) {
        el.nativeElement.style.color = 'white';
        this.el.nativeElement.style.backgroundColor = 'green';
       }

       private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
       }
}


@Component({
  selector: 'app-ng-api',
  template: \`
          <h1>Directive Decorator</h1>
          <p appHighlight>Highlight me!</p>

  \`
})
export class ApiComponent {

}

*****************************************************************

import { Component, Directive, Input,
  TemplateRef, ViewContainerRef } from '@angular/core';


@Directive({
selector: '[appUnless]'
})
export class UnlessDirective {
private hasView = false;

@Input() set appUnless(condition: boolean) {
if (!condition && !this.hasView) {
this.viewContainerRef.createEmbeddedView(this.templateRef);
this.hasView = true;
} else if (condition && this.hasView) {
this.viewContainerRef.clear();
this.hasView = false;
}
}

constructor(private templateRef: TemplateRef<any>,
       private viewContainerRef: ViewContainerRef) { }



}


@Component({
selector: 'app-ng-api',
template: \`
   <h1>Directive Decorator</h1>
   <p *appUnless="condition">Show this sentence unless the condition is true</p>
   <p *appUnless="!condition">This condition is true so this paragraph is not displayed</p>

\`
})
export class ApiComponent {
 condition = false;
}

  `
};
apip275 = {
  name: 'EventEmitter Class',
  code: `

  import { Component, Output, EventEmitter } from '@angular/core';


  @Component({
    selector: 'app-zippy',
    template: \`
            <div class="zippy">
              <div (click)="toggle()">Toggle</div>
              <div [hidden]="!visible">
                <ng-content></ng-content>
              </div>
            </div>
    \`
  })
  export class ZippyComponent {
          visible: boolean = false;
          @Output() open: EventEmitter<string> = new EventEmitter();
          @Output() close: EventEmitter<string> = new EventEmitter();

          toggle() {
            this.visible = !this.visible;
            if (this.visible) {
              this.open.emit('open');
            } else {
              this.close.emit('close');
            }
          }

  }


  @Component({
    selector: 'app-ng-api',
    template: \`
            <h1>EventEmitter Class</h1>

            <app-zippy (open)="onOpen($event)"
                      (close)="onClose($event)">
            <app-zippy>

    \`
  })
  export class ApiComponent {
        onOpen(evt) {
          console.log(evt);
        }

        onClose(evt) {
          console.log(evt);
        }
  }

  `
};
apip276 = {
  name: 'ContentChildren Decorator',
  code: `

  import { Component, ContentChildren, Directive, Input, QueryList } from '@angular/core';


  @Directive({
    selector: 'app-pane'
  })
  export class PaneDirective {
    @Input() id: string;
  }

  @Component({
    selector: 'app-tab',
    template: \`
              <div class="top-level">Top level panes: {{ serializedPanes }}</div>
              <div class="nested">Arbitrary nested panes: {{ serializedNestedPanes }}</div>

    \`
  })
  export class TabComponent {
    @ContentChildren(PaneDirective) topLevelPanes: QueryList<PaneDirective>;
    @ContentChildren(PaneDirective, { descendants: true })
    arbitraryNestedPanes: QueryList<PaneDirective>;

    get serializedPanes(): string {
      return this.topLevelPanes ?
             this.topLevelPanes.map(p => p.id).join(', ') : '';
    }

    get serializedNestedPanes(): string {
      return this.arbitraryNestedPanes ?
             this.arbitraryNestedPanes.map(p => p.id).join(', ') : '';
    }
  }


  @Component({
    selector: 'app-ng-api',
    template: \`
            <h1>ContentChildren Decorator</h1>

            <app-tab>
                <app-pane id="1"></app-pane>
                <app-pane id="2"></app-pane>
                <app-pane id="3" *ngIf="shouldShow">
                    <app-tab>
                        <app-pane id="3_1"></app-pane>
                        <app-pane id="3_2"></app-pane>
                    </app-tab>
                </app-pane>
            </app-tab>

            <button (click)="show()">Show 3</button>

    \`
  })
  export class ApiComponent {
        shouldShow = false;

        show() {
          this.shouldShow = true;
        }

  }

  `
};
apip277 = {
  name: 'Animate Function',
  code: `

  import { Component } from '@angular/core';
  import { animate, state, style, transition, trigger } from '@angular/animations';

  @Component({
    selector: 'app-ng-api',
    template: \`
            <h1>Animate Function</h1>

            <button (click)="expand()">Open</button>
            <button (click)="collapse()">Closed</button>
            <hr>
            <div class="toggle-container" [@openClose]="stateExpression">
                  Look at this box
            </div>
    \`,
    animations: [trigger(
          'openClose',
          [
            state('collapsed, void', style({ height: '0px', color: 'red',
                  borderColor: 'red'})),
            state('expanded', style({ height: '*', borderColor: 'green', color: 'green'})),
            transition(
              'collapsed <=> expanded', [animate(1500, style({height: '250px'})),
               animate(1500)]
            )
          ]
    )],
    styles: [\`
      .toggle-container {
        background-color: white;
        border: 10px solid black;
        width: 200px;
        text-align: center;
        line-height: 100px;
        font-size: 50px;
        box-sizing: border-box;
        overflow: hidden;
      }

    \`]
  })
  export class ApiComponent {
        stateExpression: string;
        constructor() {
          this.collapse();
        }

        expand() { this.stateExpression = 'expanded'; }
        collapse() { this.stateExpression = 'collapsed'; }

  }


  `
};
apip278 = {
  name: 'Interpolation',
  code: `

  import { Component } from '@angular/core';

  @Component({
    selector: 'app-ng-api',
    template: \`
            <h1>Interpolation</h1>
            <p>My current technology is {{ currentTechnology.name }}.</p>
            <h3>
                {{ title }}
              <img src="{{heroImageUrl}}" style="height:50px">
            </h3>
            <p>The product of 10 x 10 is {{ 10 * 10 }}</p>
            <p>The product of 10 x 10 is not {{ 10 * 10 * getVal() }}</p>
    \`
  })
  export class ApiComponent {
    technologies = [
        { id: 1, name: 'Angular' },
        { id: 2, name: 'React' },
        { id: 3, name: 'VueJS' }
    ];
    currentTechnology = this.technologies[0];
    title = 'Hi Baby';
    heroImageUrl = 'https://2017.angularcamp.org/img/people/Carmen.jpg';
    getVal() {
      return 2;
    }

  }

  `
};
apip279 = {
  name: 'Expression Context',
  code: `

  import { Component } from '@angular/core';

  @Component({
    selector: 'app-ng-api',
    template: \`
            <h1>Expression Context</h1>
            <span [hidden]="isUnchanged">changed</span>
            <ng-template>
                  <div *ngFor="let technology of technologies">
                      {{ technology.name }}
                  </div>
            <ng-template>
            <div (keyup)="0">
              Type something:
              <input #technologyInput> {{ technologyInput.value }}
            </div>
    \`
  })
  export class ApiComponent {
    technologies = [
        { id: 1, name: 'Angular' },
        { id: 2, name: 'React' },
        { id: 3, name: 'VueJS' }
    ];
    isUnchanged = true;

  }

  `
};
apip280 = {
  name: 'Statement Context',
  code: `

  import { Component } from '@angular/core';

  @Component({
    selector: 'app-ng-api',
    template: \`
            <h1>Statement Context</h1>
            <div class="context">
              <button (click)="deleteTechnology()">Delete technology</button>
            </div>
            <div class="context">
              <button (click)="onSave($event)">Save</button>
            </div>
            <div class="context">
                <button *ngFor="let technology of technologies"
                (click)="deleteTechnology(technology)">
                      {{ technology.name }}
                </button>
            </div>
            <div class="context">
              <form #technologyForm (ngSubmit)="onSubmit(technologyForm)">
                  ...
              </form>
            </div>

    \`
  })
  export class ApiComponent {
    technologies = [
        { id: 1, name: 'Angular' },
        { id: 2, name: 'React' },
        { id: 3, name: 'VueJS' }
    ];

    deleteTechnology() {
      alert('delete the technology.');
    }

    onSave(evt: KeyboardEvent) {
      alert('Saved. Event target is ' + (<HTMLElement>evt.target).textContent);
    }

  }

  `
};
apip281 = {
  name: 'New Mental Model',
  code: `

  import { Component } from '@angular/core';

  @Component({
    selector: 'app-ng-api',
    template: \`
            <h1>New Mental Model</h1>

              <div>
                <h3>New Mental Model</h3>
                <img src="assets/hero.jpg">
                <button disabled>Save</button>
              </div>

              <div>
                    <h3>New Mental Model</h3>
                    <app-technology-detail></app-technology-detail>
              </div>

              <div>
                  <button [disabled]="isUnchanged">Save</button>
              </div>

              <div>
                  <img [src]="heroImageUrl">
                  <app-technology-detail [technology]="currentTechnology">
                  </app-technology-detail>
                  <div [ngClass]="{'special': isSpecial}">this div is special</div>
              </div>

              <div>
                  <button (click)="onSave()">Save</button>
                  <app-technology-detail (deleteRequest)="deleteTechnology()">
                  </app-technology-detail>
                  <div (appMyClick)="clicked=$event">Click me!</div>
                     {{ clicked }}
              </div>

              <div>
                  Technology Name:
                  <input [(ngModel)]="name">
                  {{ name }}
              </div>

              <div>
                  <button [attr.aria-label]="help">Help</button>
                  <div [class.special]="isSpecial">Special</div>
                  <button [style.color]="isSpecial ? 'red' : 'green'">
                    button
                  </button>
              </div>

    \`,
    styles: [\`
        img {
          height: 100px;
        }
        .special {
          font-weight: bold;
          font-size: x-large;
          color: red;
        }
    \`]
  })
  export class ApiComponent {
    technologies = [
        { id: 1, name: 'Angular' },
        { id: 2, name: 'React' },
        { id: 3, name: 'VueJS' }
    ];
    isUnchanged = true;
    heroImageUrl = '../../assets/hero.jpg';
    currentTechnology = this.technologies[1];
    isSpecial = true;
    clicked = '';
    name = this.technologies[2].name;
    help = 'help';
    onSave() {
      alert('Saved.');
    }

    deleteTechnology() {
      alert('Delete the technology.');
    }

  }


  `
};
apip282 = {
  name: 'Technology Class',
  code: `

  export class Technology {
    static nextId = 0;

    static technologies: Technology[] = [
        new Technology(
          null,
          'Angular 5.2.5',
          'awesome',
          new Date(2018, 1, 14),
          'https://angular.io',
          150
        ),
        new Technology(1, 'Angular CLI 1.7', 'strong'),
        new Technology(2, 'Angular Material 5', 'happy'),
        new Technology(3, 'ECMAScript 6/7/8', 'energetic'),
        new Technology(4, 'Firebase')
    ];

    constructor(public id?: number,
                public name?: string,
                public emotion?: string,
                public birthDate?: Date,
                public url?: string,
                public rating = 100) {
                  this.id = id ? id : Technology.nextId++;
                }

    clone(): Technology {
        return Object.assign(new Technology(), this);
    }

  }

  `
};
apip283 = {
  name: 'Click Directive',
  code: `

  import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

  @Directive({
    selector: '[appMyClick]'
  })
  export class ClickDirective {
    @Output('appMyClick') clicks = new EventEmitter<string>();

    toggle = false;

    constructor(el: ElementRef) {
      el.nativeElement.addEventListener('click', (event: Event) => {
              this.toggle = !this.toggle;
              this.clicks.emit(this.toggle ? 'Click!' : '');
      });
    }

  }

  @Directive({
    selector: '[appMyClick2]',
    outputs: ['clicks:appMyClick']
  })
  export class Click2Directive {
    clicks = new EventEmitter<string>();
    toggle = false;

    constructor(el: ElementRef) {
      el.nativeElement.addEventListener('click', (event: Event) => {
              this.toggle = !this.toggle;
              this.clicks.emit(this.toggle ? 'Click2!' : '');
      });
    }

  }


  `
};
apip284 = {
  name: 'Technology Switch Components',
  code: `

  import { Component, Input } from '@angular/core';

  import { Technology } from '../technology';

  @Component({
    selector: 'app-awesome-technology',
    template: \`
            Wow. You like {{ technology.name }}. What an awesome technology ... just like you.
    \`
  })
  export class AwesomeTechnologyComponent {
    @Input() technology: Technology;

  }

  @Component({
    selector: 'app-strong-technology',
    template: \`
            You like {{ technology.name }}? Such a strong technology. Are you strong too?
    \`
  })
  export class StrongTechnologyComponent {
    @Input() technology: Technology;

  }

  @Component({
    selector: 'app-happy-technology',
    template: \`
            Are you as happy as {{ technology.name }}?
    \`
  })
  export class HappyTechnologyComponent {
    @Input() technology: Technology;

  }

  @Component({
    selector: 'app-future-technology',
    template: \`
            {{ message }}
    \`
  })
  export class FutureTechnologyComponent {
    @Input() technology: Technology;

    get message() {
      return this.technology && this.technology.name ?
          \`\${this.technology.name} is not born yet.\` :
          'Are you feeling stubborn and curious?';
    }

  }

  export const technologySwitchComponents =
          [ AwesomeTechnologyComponent, StrongTechnologyComponent,
            HappyTechnologyComponent, FutureTechnologyComponent ];



  `
};
apip285 = {
  name: 'Technology Form Component',
  code: `

  import { Component, Input, ViewChild } from '@angular/core';
  import { NgForm } from '@angular/forms';

  import { Technology } from '../technology';

  @Component({
    selector: 'app-technology-form',
    template: \`
              <div id="technologyForm">
                    <form (ngSubmit)="onSubmit(technologyForm)" #technologyForm="ngForm">
                          <div class="form-group">
                                <label for="name">Name
                                  <input class="form-control" name="name" required
                                  [(ngModel)]="technology.name">
                                </label>
                          </div>
                          <button type="submit" [disabled]="!technologyForm.form.valid">
                            Submit
                          </button>
                    </form>
                    <div [hidden]="!technologyForm.form.valid">
                        {{ submitMessage }}
                    </div>
              </div>
    \`,
    styles: [\`
      button {
                margin: 6px 0;
          }
      #technologyForm {
                  border: 1px solid black;
                  margin: 20px 0;
                  padding: 8px;
                  max-width: 350px;
          }
    \`]
  })
  export class TechnologyFormComponent  {
        @Input() technology: Technology;
        @ViewChild('technologyForm') form: NgForm;

        private _submitMessage = '';

        get submitMessage() {
          if (!this.form.valid) {
            this._submitMessage = '';
          }
          return this._submitMessage;
        }

        onSubmit(form: NgForm) {
          this._submitMessage = 'Submitted. Form value is ' + JSON.stringify(form.value);
        }

  }

  `
};
apip286 = {
  name: 'Technology Detail Component',
  code: `

  import { Component, EventEmitter, Input, Output } from '@angular/core';

  import { Technology } from '../technology';

  @Component({
    selector: 'app-technology-detail',
    inputs: ['technology'],
    outputs: ['deleteRequest'],
    template: \`
            <div>
                <img src="{{ heroImageUrl }}">
                <span [style.text-decoration]="lineThrough">
                    {{ prefix }} {{ technology?.name }}
                </span>
                <button (click)="delete()">Delete</button>
            </div>
    \`,
    styles: [\`
          button {
            margin-left: 8px;
          }
          div {
            margin: 8px 0;
          }
          img {
            height: 24px;
          }

    \`]
  })
  export class TechnologyDetailComponent {
    technology: Technology = new Technology(-1, '', 'Zzzzzzzzzzzzzzz');
    heroImageUrl = '../../assets/hero.jpg';

    lineThrough = '';
    @Input() prefix = '';

    deleteRequest = new EventEmitter<Technology>();

    delete() {
      this.deleteRequest.emit(this.technology);
      this.lineThrough = this.lineThrough ? '' : 'line-through';
    }

  }

  @Component({
    selector: 'app-big-technology-detail',
    template: \`
              <div class="detail">
                    <img src="{{ heroImageUrl }}">
                    <div><b>{{ technology?.name }}</b></div>
                    <div>Name: {{ technology?.name }}</div>
                    <div>Emotion: {{ technology?.emotion }}</div>
                    <div>Birthdate: {{ technology?.birthDate }}</div>
                    <div>Web: <a href="{{ technology?.url }}" target="_blank">
                      {{ technology?.url }}</a>
                    </div>
                    <div>
                        Rating: {{ technology?.rating | number:'3.1-5' }}
                    </div>
                    <br>
                    <button (click)="delete()">Delete</button>
              </div>
    \`
  })
  export class BigTechnologyDetailComponent extends TechnologyDetailComponent {
    @Input() technology: Technology;
    @Output() deleteRequest = new EventEmitter<Technology>();

    delete() {
      this.deleteRequest.emit(this.technology);
    }

  }

  `
};
apip287 = {
  name: 'Property vs. Attribute Binding. Buttons',
  code: `

  import { Component } from '@angular/core';

  @Component({
    selector: 'app-ng-api',
    template: \`
            <h1>Property vs. Attribute Binding. Buttons</h1>
            <img src="../../assets/ng-logo.png"
                 [src]="heroImageUrl">
            <br><br>
           <img [src]="iconUrl">
           <img bind-src="heroImageUrl">
           <img [attr.src]="villainImageUrl">

           <h2>Buttons</h2>
           <button>Enabled but does nothing</button>
           <button disabled>Disabled</button>
           <button disabled=false>Still disabled</button>
           <br><br>
           <button disabled>Disabled by attribute</button>
           <button [disabled]="isUnchanged">Disabled by property binding</button>
           <br><br>
           <button bind-disabled="isUnchanged" on-click="onSave($event)">
              Disabled Cancel
           </button>
           <button [disabled]="!canSave" (click)="onSave($event)">Enabled Save</button>


    \`,
    styles: [\`
      img {
        height: 100px;
      }
    \`]
  })
  export class ApiComponent {
    heroImageUrl = '../../assets/hero.jpg';
    iconUrl = '../../assets/ng-logo.png';
    villainImageUrl = '../../assets/hang.jpg';
    isUnchanged = true;
    canSave = true;

    onSave(evt: KeyboardEvent) {
      alert('Event target class is ' + (<HTMLElement>evt.target).textContent);
    }
  }

  `
};
apip288 = {
  name: 'Property Binding',
  code: `

  import { Component } from '@angular/core';
  import { Technology } from './../technology';

    @Component({
      selector: 'app-ng-api',
      template: \`
              <h1>Property Binding</h1>
              <img [src]="heroImageUrl">
              <button [disabled]="isUnchanged">Cancel is disabled</button>
              <div [ngClass]="classes">[ngClass] is binding to the classes property</div>
              <app-technology-detail [technology]="currentTechnology"></app-technology-detail>
              <img bind-src="heroImageUrl">
              <app-technology-detail prefix="You are my" [technology]="currentTechnology">
              </app-technology-detail>

              <p><img src="{{ heroImageUrl }}"> is the <i>interpolated</i> image.</p>
              <p><img [src]="heroImageUrl"> is the <i>property bound</i> image.</p>

              <p><span>"{{ title }}" is the <i>interpolated title</i> title.</span></p>
              <p>"<span [innerHTML]="title"></span>" is the <i>property bound</i> title.</p>

              <p><span>"{{ evilTitle }}" is the <i>interpolated title</i>
              evil title.</span></p>
              <p>"<span [innerHTML]="evilTitle"></span>" is the <i>property bound</i>
              evil title.</p>

      \`,
      styles: [\`
        img {
          height: 100px;
        }
        .special {
          font-weight: bold;
          font-size: x-large;
          color: red;
        }
      \`]
    })
    export class ApiComponent {
      heroImageUrl = '../../assets/hero.jpg';
      isUnchanged = true;
      classes = 'special';
      currentTechnology = Technology.technologies[0];
      title = 'Hi Baby';
      evilTitle = 'Template <script>alert("extermination through work")</script>Syntax';

    }

  `
};
apip289 = {
  name: 'Attribute Binding',
  code: `

  import { Component } from '@angular/core';

  @Component({
    selector: 'app-ng-api',
    template: \`
            <h1>Attribute Binding</h1>
            <table border="1">
              <tr><td [attr.colspan]="1 +1">One-Two</td></tr>
              <tr><td>Three</td><td>Four</td></tr>
            </table>
            <br>
            <button [attr.aria-label]="actionName">{{ actionName }} with Aria</button>
            <br>
            <br>
            <div>
                <button [attr.disabled]="isUnchanged">Disabled</button>
                <button [attr.disabled]="!isUnchanged">Disabled as well</button>
                <button disabled [disabled]="false">Enabled (but inert)</button>
            </div>
    \`
  })
  export class ApiComponent {
    actionName = 'Go for it';
    isUnchanged = true;

  }

  `
};
apip290 = {
  name: 'Class Binding',
  code: `

  import { Component } from '@angular/core';

  @Component({
    selector: 'app-ng-api',
    template: \`
            <h1>Class Binding</h1>
            <div class="nice girly special">Nice girly special</div>

            <div class="nice girly special" [class]="niceGirly">Nice girly</div>

            <div [class.special]="isSpecial">This class binding is special</div>

            <div class="special" [class.special]="!isSpecial">This one is not so special</div>

            <div bind-class.special="isSpecial">This class binding is special too</div>

    \`,
    styles: [\`
      .nice {
        color: red;
      }
      .girly {
        font-family: Brush Script MT;
      }
      .special {
        font-weight: bold;
        font-size: x-large;
      }
    \`]
  })
  export class ApiComponent {
    niceGirly = 'nice girly';
    isSpecial = true;

  }

  `
};
apip291 = {
  name: 'Style Binding',
  code: `

  import { Component } from '@angular/core';

  @Component({
    selector: 'app-ng-api',
    template: \`
            <h1>Style Binding</h1>
            <button [style.color]="isSpecial ? 'red' : 'green'">Red</button>
            <button [style.background-color]="canSave ? 'cyan' : 'grey'">Save Her</button>
            <button [style.font-size.em]="isSpecial ? 3 : 1">Big</button>
            <button [style.font-size.%]="!isSpecial ? 150 : 50">Small</button>

    \`,
    styles: [\`\`]
  })
  export class ApiComponent {
    niceGirly = 'nice girly'; // gets a date
    isSpecial = true;
    canSave = true;

  }

  `
};
apip292 = {
  name: 'Event Binding',
  code: `

  import { Component } from '@angular/core';

  import { Technology } from './../technology';

    @Component({
      selector: 'app-ng-api',
      template: \`
              <h1>Event Binding</h1>

              <button (click)="onSaveHer()">Save Her</button>
              <button on-click="onSaveHer()">Save Her</button>

              <div>
                  <div (appMyClick)="clickMessage=$event">Click with MyClick!</div>
                  {{ clickMessage }}
              </div>

              <app-technology-detail (deleteRequest)="deleteTechnology($event)"
                                      [technology]="currentTechnology">
              </app-technology-detail>
              <br>

              <app-big-technology-detail (deleteRequest)="deleteTechnology($event)"
                                          [technology]="currentTechnology">
              </app-big-technology-detail>

              <div class="parent-div" (click)="onClickMe($event)">Click me
                  <div class="child-div">Click me too!</div>
              </div>

              <div (click)="onSave()">
                  <button (click)="onSave($event)">Save, no propagation</button>
              </div>

              <div (click)="onSave()">
                  <button (click)="onSave()">Save, with propagation</button>
              </div>

      \`,
      styles: [\`\`]
    })
    export class ApiComponent {
            clickMessage = '';
            currentTechnology = new Technology(100, 'React', 'hungry', new Date(2020, 1, 1),
                                              'https://reactjs.org/', 1000);
            onSaveHer() {
              alert('Save Her ...');
            }

            deleteTechnology(technology: Technology) {
              alert(\`Delete \${technology ? technology.name : 'the technology'}.\`);
            }

            onClickMe(event: KeyboardEvent) {
              let eventMessage = event ?
                              ' Event target class is ' +
                              (<HTMLElement>event.target).className : '';
              alert('Click me.' + eventMessage);
            }

            onSave(event?: KeyboardEvent) {
              let eventMessage = event ?
                              ' Event target is ' +
                              (<HTMLElement>event.target).textContent : '';
              alert('Saved.' + eventMessage);
              if (event) {
                event.stopPropagation();
              }
            }

    }

  `
};
apip293 = {
  name: 'Two-Way Binding',
  code: `

  import { Component } from '@angular/core';


  @Component({
    selector: 'app-ng-api',
    template: \`
            <h1>Two-Way Binding</h1>
            <div>
              <app-sizer [(size)]="fontSizePx"></app-sizer>
              <div [style.font-size.px]="fontSizePx">Resizable Text</div>
              <label>FontSize (px): <input [(ngModel)]="fontSizePx"></label>
            </div>
            <h3>De-Sugared Two-Way Binding</h3>
            <app-sizer [size]="fontSizePx"
                       (sizeChange)="fontSizePx=$event">
            </app-sizer>

    \`
  })
  export class ApiComponent {
    fontSizePx = 18;

  }

  `
};
apip294 = {
  name: 'NgModel (Two-Way) Binding',
  code: `

  import { Component } from '@angular/core';

  import { Technology } from '../technology';

    @Component({
      selector: 'app-ng-api',
      template: \`
              <h1>NgModel (Two-Way) Binding</h1>
              <h3>Result: {{ currentTechnology.name }}</h3>

              <input [value]="currentTechnology.name"
                     (input)="currentTechnology.name=$event.target.value">
              without NgModel
              <br>
              <input [(ngModel)]="currentTechnology.name">
              [(ngModel)]
              <br>
              <input bindon-ngModel="currentTechnology.name">
              bindon-ngModel
              <br>
              <input [ngModel]="currentTechnology.name"
                     (ngModelChange)="currentTechnology.name=$event">
              (ngModelChange)="...name=$event"
              <br>
              <input [ngModel]="currentTechnology.name"
                     (ngModelChange)="setUpperCaseName($event)">
              (ngModelChange)="setUpperCaseName($event)"

      \`
    })
    export class ApiComponent {
      currentTechnology = Technology.technologies[0];

      setUpperCaseName(name: string) {
        this.currentTechnology.name = name.toUpperCase();
      }

    }

  `
};
apip295 = {
  name: 'NgClass Binding',
  code: `

  import { Component, OnInit } from '@angular/core';


  @Component({
    selector: 'app-ng-api',
    template: \`
            <h1>NgClass Binding</h1>

            <p>currentClasses is {{ currentClasses | json }}</p>
            <div [ngClass]="currentClasses">
                  This div is initially saveable, unchanged and special
            </div>
            <br>
            <label>saveable <input type="checkbox" [(ngModel)]="canSave"></label>
            <label>modified: <input type="checkbox" [value]="!isUnchanged"
              (change)="isUnchanged = !isUnchanged"></label> |
            <label>special: <input type="checkbox" [(ngModel)]="isSpecial"></label>
            <button (click)="setCurrentClasses()">Refresh currentClasses</button>
            <br><br>
                <div [ngClass]="currentClasses">
                      This div should be {{ canSave ? "" : "not"}} saveable,
                                         {{ isUnchanged ? "unchanged" : "modified" }} and,
                                         {{ isSpecial ? "" : "not" }}
                                         special after clicking "Refresh".
                </div>
            <br><br>
            <div [ngClass]="isSpecial ? 'special' : ''">This div is special</div>

            <div class="nice girly special">Nice girly special</div>
            <div [ngClass]="{'nice': false, 'girly': true, 'special': true }">
                      Girly special
            </div>

    \`,
    styles: [\`
          .saveable {
            color: red;
          }
          .girly, .modified {
            font-family: Brush Script MT;
          }
          .special {
            font-weight: bold;
            font-size: x-large;
          }
          .nice {
            color: red;
          }

    \`]
  })
  export class ApiComponent implements OnInit {
    currentClasses: {};
    canSave = true;
    isUnchanged = true;
    isSpecial = true;

    setCurrentClasses() {
      this.currentClasses = {
        'saveable': this.canSave,
        'modified': !this.isUnchanged,
        'special': this.isSpecial
      };
    }

    ngOnInit() {
      this.setCurrentClasses();
    }

  }

  `
};
apip296 = {
  name: 'NgStyle Binding',
  code: `

  import { Component, OnInit } from '@angular/core';


  @Component({
    selector: 'app-ng-api',
    template: \`
            <h1>NgStyle Binding</h1>

            <div [style.font-size]="isSpecial ? 'x-large' : 'smaller'">
                  This div is x-large or smaller.
            </div>

            <p>currentStyles is {{ currentStyles | json }}</p>
            <div [ngStyle]="currentStyles">
                This div is initially italic, normal weight, and extra large (24px).
            </div>
            <br>

            <label>italic: <input type="checkbox" [(ngModel)]="canSave"></label> |
            <label>normal: <input type="checkbox" [(ngModel)]="isUnchanged"></label> |
            <label>x-large: <input type="checkbox" [(ngModel)]="isSpecial"></label>
            <button (click)="setCurrentStyles()">Refresh currentStyles</button>
            <br><br>
            <div [ngStyle]="currentStyles">
                  This div should be {{ canSave ? "italic" : "plain" }},
                                     {{ isUnchanged ? "normal weight" : "bold" }} and,
                                     {{ isSpecial ? "extra large" : "normal size" }} after
                  clicking "Refresh".
            </div>
    \`
  })
  export class ApiComponent implements OnInit {
    currentStyles: {};
    canSave = true;
    isUnchanged = true;
    isSpecial = true;

    setCurrentStyles() {
      this.currentStyles = {
        'font-style': this.canSave ? 'italic' : 'normal',
        'font-weight': !this.isUnchanged ? 'bold' : 'normal',
        'font-size': this.isSpecial ? '24px' : '12px'
      };
    }

    ngOnInit() {
      this.setCurrentStyles();
    }

  }

  `
};
apip297 = {
  name: 'NgIf Binding',
  code: `

  import { Component } from '@angular/core';


  @Component({
    selector: 'app-ng-api',
    template: \`
            <h1>NgIf Binding</h1>

            <app-technology-detail *ngIf="isActive"></app-technology-detail>

            <div *ngIf="currentTechnology">Hello, {{ currentTechnology.name }}</div>
            <div *ngIf="nullTechnology">Hello, {{ nullTechnology.name }}</div>

            <ng-template [ngIf]="currentTechnology">
                         Add {{ currentTechnology.name }} with template
            </ng-template>

            <div>Technology Detail removed from DOM (via template)
                                   because isActive is false</div>
            <ng-template [ngIf]="isActive">
                <app-technology-detail></app-technology-detail>
            </ng-template>

            <div [class.hidden]="!isSpecial">Show with class</div>
            <div [class.hidden]="isSpecial">Hide with class</div>

            <app-technology-detail [class.hidden]="isSpecial"></app-technology-detail>

            <div [style.display]="isSpecial ? 'block' : 'none'">Show with style</div>
            <div [style.display]="isSpecial ? 'none' : 'block'">Hide with style</div>

    \`,
    styles: [\`
        .hidden {
          display: none;
        }
    \`]
  })
  export class ApiComponent {
          isActive = false;
          isSpecial = true;
          nullTechnology = null;

          technologies = [
            { id: 1, name: 'Angular 5.2.5' },
            { id: 2, name: 'Angular CLI 1.7.1' },
            { id: 3, name: 'Angular Material 5'}
          ];

          currentTechnology = this.technologies[1];

  }

  `
};
apip298 = {
  name: 'NgFor Binding',
  code: `

  import { Component, OnInit, AfterViewInit,
           QueryList, ElementRef, ViewChildren } from '@angular/core';

  import { Technology } from '../technology';

  @Component({
  selector: 'app-ng-api',
  template: \`
       <h1>NgFor Binding</h1>

       <div class="box">
           <div *ngFor="let technology of technologies">
                     {{ technology.name }}
           </div>
       </div>
       <br>
       <div class="box">
               <app-technology-detail *ngFor="let technology of technologies"
                                 [technology]="technology">
               </app-technology-detail>
       </div>
       <br>
       <h4>*ngFor with index</h4>
       <p>with <i>semi-colon</i> separator</p>
       <div class ="box">
           <div *ngFor="let technology of technologies; let i = index;">
                   ({{ i + 1 }}) - {{ technology.name }}
           </div>
       </div>

       <p>with <i>comma</i> separator</p>
       <div class="box">
           <div *ngFor="let technology of technologies, let i = index;">
                 ({{ i + 1 }}) - {{ technology.name }}
           </div>
       </div>

       <h4>*ngFor trackBy</h4>
       <button (click)="resetTechnologies()">Reset Technologies</button>
       <button (click)="changeIds()">Change Ids</button>
       <button (click)="clearTrackByCounts()">Clear Counts</button>

       <p><i>without</i> trackBy</p>
             <div class="box">
                   <div #noTrackBy *ngFor="let technology of technologies">
                         ({{ technology.id }}) {{ technology.name }}
                   </div>
                   <div *ngIf="technologiesNoTrackByCount">
                           Technology DOM elements change #{{ technologiesNoTrackByCount }}
                           without trackBy
                   </div>
             </div>
       <p>with trackBy</p>
       <div class="box">
             <div #withTrackBy *ngFor="let technology of technologies;
                  trackBy: trackByTechnologies;">
                         ({{ technology.id }}) {{ technology.name }}
             </div>
             <div *ngIf="technologiesWithTrackByCount">
                   Technology DOM elements change #{{ technologiesWithTrackByCount }}
                   with trackBy
             </div>
       </div>
       <br>
       <br>
       <br>

       <p>with trackBy and <i>semi-colon</i> separator</p>
       <div class="box">
           <div *ngFor="let technology of technologies; trackBy: trackByTechnologies;">
                 ({{ technology.id }}) {{ technology.name }}
           </div>
       </div>

       <p>with trackBy and <i>comma</i> separator</p>
       <div class="box">
           <div *ngFor="let technology of technologies, trackBy: trackByTechnologies;">
                 ({{ technology.id }}) {{ technology.name }}
           </div>
       </div>

       <p>with trackBy and <i>space</i> separator</p>
       <div class="box">
           <div *ngFor="let technology of technologies trackBy: trackByTechnologies;">
               ({{ technology.id }}) {{ technology.name }}
           </div>
       </div>

       <p>with <i>generic</i> trackById function</p>
       <div class="box">
           <div *ngFor="let technology of technologies, trackBy: trackById;">
             ({{ technology.id }}) {{ technology.name }}
           </div>
       </div>

\`,
styles: [\`
 .box {
   border: 3px solid red;
   padding: 6px;
   max-width: 300px;
 }
\`]
})
export class ApiComponent implements OnInit, AfterViewInit {
     @ViewChildren('noTrackBy') technologiesNoTrackBy: QueryList<ElementRef>;
     @ViewChildren('withTrackBy') technologiesWithTrackBy: QueryList<ElementRef>;

     technologiesNoTrackByCount = 0;
     technologiesWithTrackByCount = 0;
     technologiesWithTrackByCountReset = 0;

     technologyIdIncrement = 1;

     technologies: Technology[] = [];

     resetTechnologies() {
       this.technologies = Technology.technologies.map(technology => technology.clone());
       this.technologiesWithTrackByCountReset = 0;
     }

     changeIds() {
       this.resetTechnologies();
       this.technologies.forEach(t => t.id += 10 * this.technologyIdIncrement++);
       this.technologiesWithTrackByCountReset = -1;
     }

     clearTrackByCounts() {
       const trackByCountReset = this.technologiesWithTrackByCountReset;
       this.resetTechnologies();
       this.technologiesNoTrackByCount = -1;
       this.technologiesWithTrackByCount = trackByCountReset;
       this.technologyIdIncrement = 1;
     }

     ngOnInit() {
       this.technologies = Technology.technologies;
     }

     ngAfterViewInit() {
       trackChanges(this.technologiesNoTrackBy,
                    () => this.technologiesNoTrackByCount++);
       trackChanges(this.technologiesWithTrackBy,
                    () => this.technologiesWithTrackByCount++);
     }


     trackByTechnologies(index: number, technology: Technology):
                         number { return technology.id; }

     trackById(index: number, item: any):
                         number { return item['id']; }

}

function trackChanges(views: QueryList<ElementRef>, changed: () => void) {
      let oldRefs = views.toArray();
      views.changes.subscribe((changes: QueryList<ElementRef>) => {
         const changedRefs = changes.toArray();
         const isSame = oldRefs.every((v, i) =>
                             v.nativeElement === changedRefs[i].nativeElement);
         if (!isSame) {
           oldRefs = changedRefs;
           setTimeout(changed, 0);
         }
      });
  }

  `
};
apip299 = {
  name: 'NgSwitch Binding',
  code: `

  import { Component, OnInit } from '@angular/core';

  import { Technology } from '../technology';

    @Component({
      selector: 'app-ng-api',
      template: \`
              <h1>NgSwitch Binding</h1>

              <p>Select your favorite technology</p>

              <div>
                  <label *ngFor="let tech of technologies">
                  <input type="radio" name="technologies" [(ngModel)]="currentTechnology"
                         [value]="tech">{{ tech.name }}
                  </label>
              </div>

              <div [ngSwitch]="currentTechnology.emotion">
                  <app-awesome-technology
                                          *ngSwitchCase="'awesome'"
                                          [technology]="currentTechnology">
                  </app-awesome-technology>
                  <app-strong-technology
                                          *ngSwitchCase="'strong'"
                                          [technology]="currentTechnology">
                  </app-strong-technology>
                  <app-happy-technology
                                          *ngSwitchCase="'happy'"
                                          [technology]="currentTechnology">
                  </app-happy-technology>
                  <div *ngSwitchCase="'happy'">
                          Are you as happy as {{ currentTechnology.name }}?
                  </div>
                  <app-future-technology *ngSwitchDefault [technology]="currentTechnology">
                  </app-future-technology>
              </div>

      \`
    })
    export class ApiComponent implements OnInit {
            technologies: Technology[] = [];
            currentTechnology: Technology;

            ngOnInit() {
              this.technologies = Technology.technologies;
              this.currentTechnology = this.technologies[0];
            }

    }


  `
};
apip300 = {
  name: 'Template Reference Variables',
  code: `

  import { Component } from '@angular/core';

  import { Technology } from './../technology';

    @Component({
      selector: 'app-ng-api',
      template: \`
              <h1>Template Reference Variables</h1>

              <input #phone placeholder="phone number">

              <button (click)="callPhone(phone.value)">Call</button>

              <input ref-fax placeholder="fax number">
              <button (click)="callFax(fax.value)">Fax</button>

              <button #btn disabled [innerHTML]="'disabled by attribute: '
                                                 +btn.disabled"></button>

              <h4>Technology Form</h4>
              <app-technology-form [technology]="currentTechnology"></app-technology-form>

      \`
    })
    export class ApiComponent {
      currentTechnology: Technology;

      callPhone(value: string) {
        alert(\`Calling \${value} ...\` );
      }

      callFax(value: string) {
        alert(\`Faxing \${value} ...\`);
      }

      constructor() {
        this.currentTechnology = Technology.technologies[0];
      }

    }

  `
};
apip301 = {
  name: 'Inputs && Outputs',
  code: `

  import { Component } from '@angular/core';

  import { Technology } from './../technology';

    @Component({
      selector: 'app-ng-api',
      template: \`
              <h1>Inputs && Outputs</h1>
              <img [src]="iconUrl">
              <button (click)="onSave()">Save Her</button>

              <app-technology-detail [technology]="currentTechnology"
                                    (deleteRequest)="deleteTechnology($event)">
              <app-technology-detail>

              <div (appMyClick)="clickMessage2=$event">MyClick2</div>
              {{ clickMessage2 }}
      \`
    })
    export class ApiComponent {
      currentTechnology: Technology;
      iconUrl = '../../assets/ng-logo.png';
      clickMessage2 = '';
      onSave() {
        alert('Save Her.');
      }

      deleteTechnology(evt) {
        alert(\`Delete \${evt.name}.\`);
      }

      constructor() {
        this.currentTechnology = Technology.technologies[0];
      }

    }

  `
};
apip302 = {
  name: 'Pipes',
  code: `

  import { Component } from '@angular/core';

  import { Technology } from './../technology';

    @Component({
      selector: 'app-ng-api',
      template: \`
              <h1>Pipes</h1>

              <div>Title through uppercase pipe: {{ title | uppercase }}</div>

              <div>
                    Title through a pipe chain:
                    {{ title | uppercase | lowercase }}
              </div>

              <div>{{ currentTechnology | json }}</div>

              <div>Birthdate: {{ (currentTechnology?.birthDate | date:'longDate')
                                                               | uppercase }}</div>

              <div>
                  <label>Price: </label> {{ price | currency:'EUR':true }}
              </div>

      \`
    })
    export class ApiComponent {
      title = 'Super Sex';
      currentTechnology: Technology;
      price = 42;

      constructor() {
        this.currentTechnology = Technology.technologies[0];
      }

    }

  `
};
apip303 = {
  name: 'Safe Navigation Operator ?.',
  code: `

  import { Component } from '@angular/core';

  import { Technology } from './../technology';

    @Component({
      selector: 'app-ng-api',
      template: \`
              <h1>Safe Navigation Operator ?.</h1>

              <div>
                  The title is {{ title }}
              </div>

              <div>
                  The current technologies name is {{ currentTechnology?.name }}
              </div>

              <div>
                  The current technologies name is {{ currentTechnology.name }}
              </div>

              <div *ngIf="nullTechnology">
                  The null technologies name is {{ nullTechnology.name }}
              </div>

              <div>
                  The null technologies name is {{ nullTechnology && nullTechnology.name }}
              </div>

              <div>
                The null technologies name is {{ nullTechnology?.name }}
              </div>

      \`
    })
    export class ApiComponent {
      title = 'Super Code';
      currentTechnology: Technology;

      constructor() {
        this.currentTechnology = Technology.technologies[0];
      }

      get nullTechnology(): Technology {
        return null;
      }

    }

  `
};
apip304 = {
  name: 'Non-Null Assertion Operator !.',
  code: `

  import { Component } from '@angular/core';

  import { Technology } from './../technology';

    @Component({
      selector: 'app-ng-api',
      template: \`
              <h1>Non-Null Assertion Operator !.</h1>

              <div *ngIf="technology">
                    The technologies name is {{ technology!.name }}
              </div>

      \`
    })
    export class ApiComponent {
      technology: Technology;

      constructor() {
        this.technology = Technology.technologies[0];
      }

    }

  `
};
apip305 = {
  name: 'Any Type Cast Function',
  code: `

  import { Component } from '@angular/core';

  import { Technology } from './../technology';

    @Component({
      selector: 'app-ng-api',
      template: \`
              <h1>Any Type Cast Function $any()</h1>

              <div>
                    <div>
                          The technology's marker is {{ $any(technology).marker }}
                    </div>
              </div>

              <div>
                      <div>
                          Undeclared member is {{ $any(this).member }}
                      </div>
              </div>

      \`
    })
    export class ApiComponent {
      technology: Technology;

      constructor() {
        this.technology = Technology.technologies[0];
      }

    }

  `
};
apip306 = {
  name: 'Enums In Binding',
  code: `

  import { Component } from '@angular/core';


  export enum Color { Red, Green, Blue };

    @Component({
      selector: 'app-ng-api',
      template: \`
              <h1>Enums In Binding</h1>

              <p>
                  The name of the Color.Red enum is {{ Color[Color.Red] }}.<br>
                  The current color is {{ Color[color] }} and its number is {{ color }}.<br>
                  <button [style.color]="Color[color]" (click)="colorToggle()">
                      Enum Toggle
                  </button>
              </p>
      \`
    })
    export class ApiComponent {
      Color = Color;
      color = Color.Red;

      colorToggle() {
        this.color = (this.color === Color.Red) ? Color.Blue : Color.Red;
      }

    }

  `
};
apip307 = {
  name: 'Package JSON',
  code: `

  {
    "name": "ng5-tour-of-heroes",
    "version": "0.0.0",
    "license": "MIT",
    "scripts": {
      "ng": "ng",
      "start": "ng serve",
      "build": "ng build",
      "test": "ng test",
      "lint": "ng lint",
      "e2e": "ng e2e"
    },
    "private": true,
    "dependencies": {
      "@angular/animations": "^5.2.6",
      "@angular/common": "^5.2.6",
      "@angular/compiler": "^5.2.6",
      "@angular/core": "^5.2.6",
      "@angular/forms": "^5.2.6",
      "@angular/http": "^5.2.6",
      "@angular/platform-browser": "^5.2.6",
      "@angular/platform-browser-dynamic": "^5.2.6",
      "@angular/platform-server": "^5.2.6",
      "@angular/router": "^5.2.6",
      "angular-in-memory-web-api": "^0.5.3",
      "core-js": "^2.4.1",
      "rxjs": "^5.5.6",
      "zone.js": "^0.8.14"
    },
    "devDependencies": {
      "@angular/cli": "^1.7.1",
      "@angular/compiler-cli": "^5.2.6",
      "@angular/language-service": "^4.2.4",
      "@types/jasmine": "~2.5.53",
      "@types/jasminewd2": "~2.0.2",
      "@types/node": "~6.0.60",
      "codelyzer": "~3.1.1",
      "jasmine-core": "~2.6.2",
      "jasmine-spec-reporter": "~4.1.0",
      "karma": "~1.7.0",
      "karma-chrome-launcher": "~2.1.1",
      "karma-cli": "~1.0.1",
      "karma-coverage-istanbul-reporter": "^1.2.1",
      "karma-jasmine": "~1.1.0",
      "karma-jasmine-html-reporter": "^0.2.2",
      "protractor": "~5.1.2",
      "ts-node": "~3.2.0",
      "tslint": "~5.3.2",
      "typescript": "^2.6.2"
    }
  }

  `
};
apip308 = {
  name: 'Index HTML',
  code: `

  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <title>ng5-tour-of-heroes</title>
    <base href="/">

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
  </head>
  <body>
    <app-root>launch my baby ...</app-root>
  </body>
  </html>

  `
};
apip309 = {
  name: 'Main TS',
  code: `

  import { enableProdMode } from '@angular/core';
  import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

  import { AppModule } from './app/app.module';
  import { environment } from './environments/environment';

  if (environment.production) {
  enableProdMode();
  }

  platformBrowserDynamic().bootstrapModule(AppModule);

  `
};
apip310 = {
  name: 'Global STYLES',
  code: `

  /* Application-wide Styles */
  h1 {
    color: #369;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 250%;
  }

  h2, h3 {
    color: #444;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: lighter;
  }

  body {
    margin: 2em;
  }

  body, input[text], button {
    color: #888;
    font-family: Cambria, Georgia;
  }

  a {
    cursor: pointer;
    cursor: hand;
  }

  button {
    font-family: Arial;
    background-color: #eee;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    cursor: hand;
  }

  button:hover {
    background-color: #cfd8dc;
  }

  button:disabled {
    background-color: #eee;
    color: #aaa;
    cursor: auto;
  }

  nav a {
    padding: 5px 10px;
    text-decoration: none;
    margin-right: 10px;
    margin-top: 10px;
    display: inline-block;
    background-color: #eee;
    border-radius: 5px;
  }

  nav a:visited, a:link {
    color: #607D8B;
  }

  nav a:hover {
    color: #039be5;
    background-color: #CFD8DC;
  }

  nav a.active {
    color: #039be5;
  }

  /* everywhere else*/
  * {
    font-family: Arial, Helvetica, sans-serif;
  }

  `
};
apip311 = {
  name: 'App Module',
  code: `

  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { FormsModule } from '@angular/forms';
  import { HttpClientModule } from '@angular/common/http';

  import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
  import { InMemoryDataService } from './in-memory-data.service';

  import { AppRoutingModule } from './app-routing.module';

  import { AppComponent } from './app.component';
  import { HeroesComponent } from './heroes/heroes.component';
  import { HeroDetailComponent } from './hero-detail/hero-detail.component';
  import { MessagesComponent } from './messages/messages.component';
  import { DashboardComponent } from './dashboard/dashboard.component';
  import { HeroSearchComponent } from './hero-search/hero-search.component';

  import { HeroService } from './hero.service';
  import { MessageService } from './message.service';


  @NgModule({
    declarations: [
      AppComponent,
      HeroesComponent,
      HeroDetailComponent,
      MessagesComponent,
      DashboardComponent,
      HeroSearchComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService, { dataEncapsulation: false }
      ),
      AppRoutingModule
    ],
    providers: [ HeroService, MessageService ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }

  `
};
apip312 = {
  name: 'App Routing Module',
  code: `

  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';

  import { HeroesComponent } from './heroes/heroes.component';
  import { HeroDetailComponent } from './hero-detail/hero-detail.component';
  import { DashboardComponent } from './dashboard/dashboard.component';

  const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'heroes', component: HeroesComponent }
  ];

  @NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule { }


  `
};
apip313 = {
  name: 'App Component',
  code: `

  import { Component } from '@angular/core';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    title = 'Tour Of Heroes';
  }


  `
};
apip314 = {
  name: 'App Component HTML',
  code: `

  <h1>{{ title }}</h1>

  <nav>
    <a routerLink="/dashboard">Dashboard</a>
    <a routerLink="/heroes">Heroes</a>
  </nav>

  <router-outlet></router-outlet>

  <app-messages></app-messages>

  `
};
apip315 = {
  name: 'Message Service',
  code: `

  import { Injectable } from '@angular/core';

  @Injectable()
  export class MessageService {
    messages: string[] = [];

    add(message: string) {
      this.messages.push(message);
    }

    clear() {
      this.messages = [];
    }

  }

  `
};
apip316 = {
  name: 'In Memory Data Service',
  code: `

  import { InMemoryDbService } from 'angular-in-memory-web-api';

  export class InMemoryDataService implements InMemoryDbService {
    createDb() {
      const heroes = [
        { id: 11, name: 'Odin' },
        { id: 12, name: 'Thor' },
        { id: 13, name: 'Freyja' },
        { id: 14, name: 'Frigg' },
        { id: 15, name: 'Tyr' },
        { id: 16, name: 'Baldur' },
        { id: 17, name: 'Loki' },
        { id: 18, name: 'Mani' },
        { id: 19, name: 'Sol' },
        { id: 20, name: 'Heimdall' }
      ];
        return { heroes };
    }
  }


  `
};
apip317 = {
  name: 'Hero Class',
  code: `

  export class Hero {
    id: number;
    name: string;
  }


  `
};
apip318 = {
  name: 'Hero Service',
  code: `

  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders } from '@angular/common/http';

  import { Hero } from './hero';
  import { MessageService } from './message.service';

  import { Observable } from 'rxjs/Observable';
  import { catchError, map, tap } from 'rxjs/operators';
  import { of } from 'rxjs/observable/of';


  const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  @Injectable()
  export class HeroService {

    private heroesUrl = 'api/heroes';

    private log(message: string) {
      this.messageService.add('Hero Service: ' + message);
    }

    constructor(private http: HttpClient, private messageService: MessageService) { }

    getHeroes(): Observable<Hero[]> {
      return this.http.get<Hero[]>(this.heroesUrl)
                      .pipe(
                        tap(heroes => this.log(\`fetched heroes\`)),
                        catchError(this.handleError('getHeroes', []))
                      );
    }

    getHero(id: number): Observable<Hero> {
      const url = \`\${this.heroesUrl}/\${id}\`;
      return this.http.get<Hero>(url).pipe(
        tap(() => this.log(\`fetched hero id=\${id}\`)),
        catchError(this.handleError<Hero>(\`getHero id=\${id}\`))
      );
    }


    updateHero(hero: Hero): Observable<any> {
      return this.http.put(this.heroesUrl, hero, httpOptions).pipe
      (
        tap(() => this.log(\`updated hero id=\${hero.id}\`)),
        catchError(this.handleError<any>('updateHero'))
      );
    }

    addHero(hero: Hero): Observable<Hero> {
      return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
        tap((h: Hero) => this.log(\`added hero w/id=\${h.id}\`)),
        catchError(this.handleError<Hero>('addHero'))
      );
    }

    deleteHero(hero: Hero | number): Observable<Hero> {
      const id = typeof hero === 'number' ? hero : hero.id;
      const url = \`\${this.heroesUrl}/\${id}\`;

      return this.http.delete<Hero>(url, httpOptions).pipe(
        tap(() => this.log(\`deleted hero id=\${id}\`)),
        catchError(this.handleError<Hero>('deleteHero'))
      );
    }

    searchHeroes(term: string): Observable<Hero[]> {
      if (!term.trim()) {
        return of([]);
      }
      return this.http.get<Hero[]>(\`api/heroes/?name=\${term}\`).pipe(
        tap(() => this.log(\`found heroes matching "\${term}"\`)),
        catchError(this.handleError<Hero[]>('searchHeroes', []))
      );
    }

    private handleError<T>(operation = 'operation', result?: T) {
            return (error: any): Observable<T> => {
              console.error(error);
              this.log(\`\${operation} failed: \${error.message}\`);
              return of(result as T);
            };
    }

  }


  `
};
apip319 = {
  name: 'Dashboard Component',
  code: `

  import { Component, OnInit, OnDestroy } from '@angular/core';

  import { Hero } from '../hero';
  import { HeroService } from '../hero.service';

  import { Subscription } from 'rxjs/Subscription';

  @Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
  })
  export class DashboardComponent implements OnInit, OnDestroy {
    heroes: Hero[];
    dashboardSubscription: Subscription;

    constructor(private heroService: HeroService) { }

    ngOnInit() {
      this.getHeroes();
    }

    getHeroes() {
      this.dashboardSubscription = this.heroService.getHeroes().subscribe(heroes => {
        this.heroes = heroes.slice(1, 5);
      });
    }

    ngOnDestroy() {
      this.dashboardSubscription.unsubscribe();
    }

  }


  `
};
apip320 = {
  name: 'Dasboard Component HTML',
  code: `

  <h3>Top Heroes</h3>
  <div class="grid grid-pad">
    <a *ngFor="let hero of heroes" class="col-1-4" routerLink="/detail/{{hero.id}}">
        <div class="module hero">
            <h4>{{ hero.name }}</h4>
        </div>
    </a>
  </div>
  <app-hero-search></app-hero-search>

  `
};
apip321 = {
  name: 'Dashboard Component CSS',
  code: `

  [class*='col-'] {
    float: left;
    padding-right: 20px;
    padding-bottom: 20px;
  }

  [class*='col-']:last-of-type {
    padding-right: 0;
  }

  a {
    text-decoration: none;
  }

  *, *:after, *:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  h3 {
    text-align: center;
    margin-bottom: 0;
  }

  h4 {
    position: relative;
  }

  .grid {
    margin: 0;
  }

  .col-1-4 {
    width: 25%;
  }

  .module {
    padding: 20px;
    text-align: center;
    color: #eee;
    max-height: 120px;
    min-width: 120px;
    background-color: #607D8B;
    border-radius: 2px;
  }

  .module:hover {
    background-color: #EEE;
    cursor: pointer;
    color: #607d8b;
  }

  .grid-pad {
    padding: 10px 0;
  }

  .grid-pad > [class*='col-']:last-of-type {
    padding-right: 20px;
  }

  @media (max-width: 600px) {
    .module {
      font-size: 10px;
      max-height: 75px;
    }
  }

  @media (max-width: 1024px) {
    .grid {
      margin: 0;
    }
    .module {
      min-width: 60px;
    }
  }

  `
};
apip322 = {
  name: 'Hero Detail Component',
  code: `

  import { Component, OnInit, Input, OnDestroy } from '@angular/core';
  import { ActivatedRoute } from '@angular/router';
  import { Location } from '@angular/common';

  import { HeroService } from '../hero.service';
  import { Hero } from '../hero';

  import { Subscription } from 'rxjs/Subscription';

  @Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
  })
  export class HeroDetailComponent implements OnInit, OnDestroy {
    @Input() hero: Hero;
    heroSubscription: Subscription;

    constructor(private route: ActivatedRoute,
                private heroService: HeroService,
                private location: Location) { }

    ngOnInit() {
      this.getHero();
    }

    getHero() {
      const id = +this.route.snapshot.paramMap.get('id');
      this.heroSubscription =
        this.heroService.getHero(id).subscribe(hero => this.hero = hero);
    }

    save(): void {
      this.heroSubscription =
        this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
    }

    goBack(): void {
      this.location.back();
    }

    ngOnDestroy() {
      this.heroSubscription.unsubscribe();
    }

  }

  `
};
apip323 = {
  name: 'Hero Detail Component HTML',
  code: `

  <div *ngIf="hero">
  <h2>{{ hero.name | uppercase }} Details</h2>
  <div><span>id: </span>{{ hero.id }}</div>
  <div>
          <label>name:
                <input [(ngModel)]="hero.name" placeholder="name">
          </label>
  </div>
</div>
<button (click)="goBack()">go back</button>
<button (click)="save()">save</button>

  `
};
apip324 = {
  name: 'Hero Detail Component CSS',
  code: `

  label {
    display: inline-block;
    width: 3em;
    margin: .5em 0;
    color: #607D8B;
    font-weight: bold;
  }

  input {
    height: 2em;
    font-size: 1em;
    padding-left: .4em;
  }

  button {
    margin-top: 20px;
    font-family: Arial;
    background-color: #eee;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    cursor: hand;
  }

  button:hover {
    background-color: #cfd8dc;
  }

  button:disabled {
    background-color: #eee;
    color: #ccc;
    cursor: auto;
  }


  `
};
apip325 = {
  name: 'Hero Search Component',
  code: `

  import { Component, OnInit } from '@angular/core';

  import { Hero } from '../hero';
  import { HeroService } from '../hero.service';

  import { Observable } from 'rxjs/Observable';
  import { Subject } from 'rxjs/Subject';
  import { of } from 'rxjs/observable/of';

  import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

  @Component({
    selector: 'app-hero-search',
    templateUrl: './hero-search.component.html',
    styleUrls: ['./hero-search.component.css']
  })
  export class HeroSearchComponent implements OnInit {
    heroes$: Observable<Hero[]>;

    private searchTerms = new Subject<string>();

    constructor(private heroService: HeroService) { }

    search(term: string): void {
      this.searchTerms.next(term);
    }

    ngOnInit() {
      this.heroes$ = this.searchTerms.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((term: string) => this.heroService.searchHeroes(term))
      );
    }

  }

  `
};
apip326 = {
  name: 'Hero Search Component HTML',
  code: `

  <div id="search-component">
          <h4>Hero Search</h4>
          <input #searchBox id="search-box" (keyup)="search(searchBox.value)">
          <ul class="search-result">
          <li *ngFor="let hero of heroes$ | async">
            <a routerLink="/detail/{{ hero.id }}">
              {{ hero.name }}
            </a>
          </li>
        </ul>
  </div>

  `
};
apip327 = {
  name: 'Hero Search Component CSS',
  code: `

  .search-result li {
    border-bottom: 1px solid gray;
    border-left: 1px solid gray;
    border-right: 1px solid gray;
    width: 192px;
    height: 16px;
    padding: 5px;
    background-color: white;
    cursor: pointer;
    list-style-type: none;
  }

  .search-result li:hover {
    background-color: #607D8B;
  }

  .search-result li a {
    color: #888;
    display: block;
    text-decoration: none;
  }

  .search-result li a:hover {
    color: white;
  }

  .search-result li a:active {
    color: white;
  }

  #search-box {
    width: 200px;
    height: 20px;
  }

  ul.search-result {
    margin-top: 0;
    padding-left: 0;
  }

  `
};
apip328 = {
  name: 'Heroes Component',
  code: `

  import { Component, OnInit, OnDestroy } from '@angular/core';

  import { Hero } from '../hero';
  import { HeroService } from '../hero.service';

  import { Subscription } from 'rxjs/Subscription';

  @Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
  })
  export class HeroesComponent implements OnInit, OnDestroy {
    heroes: Hero[];
    heroesSubscription: Subscription;

    constructor(private heroService: HeroService) { }

    ngOnInit() {
      this.getHeroes();
    }

    getHeroes(): void {
      this.heroesSubscription =
            this.heroService.getHeroes().subscribe(heroes => {
        this.heroes = heroes;
      });
    }

    add(name: string): void {
      name = name.trim();
      if (!name) { return; }
      this.heroesSubscription =
            this.heroService.addHero({ name } as Hero).subscribe(hero => {
        this.heroes.push(hero);
      });
    }

    delete(hero: Hero): void {
      this.heroes = this.heroes.filter(h => h !== hero);
      this.heroesSubscription = this.heroService.deleteHero(hero).subscribe();
    }

    ngOnDestroy() {
      this.heroesSubscription.unsubscribe();
    }

  }

  `
};
apip329 = {
  name: 'Heroes Component HTML',
  code: `

  <h2>My Heroes</h2>
  <div>
    <label>Hero name:
      <input #heroName>
    </label>
    <button (click)="add(heroName.value); heroName.value = '';">
      add
    </button>
  </div>
  <ul class="heroes">
    <li *ngFor="let hero of heroes">
      <a routerLink="/detail/{{hero.id}}">
        <span class="badge">{{ hero.id }}</span> {{ hero.name }}
      </a>
        <button class="delete" title="delete hero" (click)="delete(hero)">x</button>
    </li>
  </ul>

  `
};
apip330 = {
  name: 'Heroes Component CSS',
  code: `

  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }

  .heroes li {
    cursor: pointer;
    position: relative;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 5px;
  }


  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }

  .heroes a {
    color: #888;
    text-decoration: none;
    position: relative;
    display: block;
    width: 250px;
  }

  .heroes a:hover {
    color: #607D8B;
  }

  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    min-width: 16px;
    text-align: right;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }

  button {
    background-color: #eee;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    cursor: hand;
    font-family: Arial;
  }

  button:hover {
    background-color: #cfd8dc;
  }

  button.delete {
    position: relative;
    left: 194px;
    top: -32px;
    background-color: grey !important;
    color: white;
  }

  `
};
apip331 = {
  name: 'Messages Component',
  code: `

  import { Component } from '@angular/core';

  import { MessageService } from '../message.service';

  @Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css']
  })
  export class MessagesComponent {

    constructor(public messageService: MessageService) { }

  }


  `
};
apip332 = {
  name: 'Messages Component HTML',
  code: `

  <div *ngIf="messageService.messages.length">

          <h2>Messages</h2>
              <button class="clear" (click)="messageService.clear()">
                clear
              </button>

      <div *ngFor="let message of messageService.messages">{{ message }}</div>

  </div>

  `
};
apip333 = {
  name: 'Messages Component CSS',
  code: `

  h2 {
    color: red;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: lighter;
  }

  body {
    margin: 2em;
  }

  body, input[text], button {
    color: crimson;
    font-family: Cambria, Georgia;
  }

  button.clear {
    font-family: Arial;
    background-color: #eee;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    cursor: hand;
  }

  button:hover {
    background-color: #cfd8dc;
  }

  button:disabled {
    background-color: #eee;
    color: #aaa;
    cursor: auto;
  }

  button.clear {
    color: #888;
    margin-bottom: 12px;
  }

  `
};
apip334 = {
  name: 'Obervable Of',
  code: `

  import { Component } from '@angular/core';

  import { Observable } from 'rxjs/Observable';
  import 'rxjs/add/observable/of';

  @Component({
    selector: 'app-observable',
    template: \`
            <ul>
                  <li *ngFor="let number of myNumbers$ | async">
                          {{ number }}
                  </li>
            </ul>
    \`
  })
  export class ObservableComponent {

    myNumbers$ = Observable.of([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]);

  }

  `
};
apip335 = {
  name: 'Subject',
  code: `

  import { Component } from '@angular/core';

  import { Subject } from 'rxjs/Subject';

  @Component({
    selector: 'app-observable',
    template: \`
            <button (click)="upVote(1)">
              Up Vote
            </button>
    \`
  })
  export class ObservableComponent {
      counter$ = new Subject<number>();

      upVote(vote: number) {
        this.counter$.next(vote);
      }

      constructor() {
        this.counter$.subscribe(value => {
          console.log(value);
        });
      }

  }

  `
};
apip336 = {
  name: 'Range Pipe Filter Map Subscribe',
  code: `

  import { Component } from '@angular/core';

  import { Observable } from 'rxjs/Observable';
  import { range } from 'rxjs/observable/range';
  import { map, filter } from 'rxjs/operators';

  @Component({
    selector: 'app-observable',
    template: \`

    \`
  })
  export class ObservableComponent {

      constructor() {
        range(1, 100)
            .pipe(
              filter(x => x % 2 === 1),
              map(x => x + x))
            .subscribe(x => console.log(x));
      }

  }

  `
};
apip337 = {
  name: 'Scan',
  code: `

  import { Component } from '@angular/core';

  import { Observable } from 'rxjs/Observable';
  import { range } from 'rxjs/observable/range';
  import { map, filter, scan } from 'rxjs/operators';

  @Component({
    selector: 'app-observable',
    template: \`

    \`
  })
  export class ObservableComponent {

     source$ = range(0, 10);

      constructor() {
        this.source$
            .pipe(
              filter(x => x % 2 === 0),
              map(x => x + x),
              scan((acc, x) => acc + x, 0))
            .subscribe(x => console.log(x));
      }

  }

  `
};
apip338 = {
  name: 'Observable FromEvent',
  code: `

  import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

  import { Observable } from 'rxjs/Observable';
  import 'rxjs/add/observable/fromEvent';

  @Component({
    selector: 'app-observable',
    template: \`
            <button #herSexyButton>Click</button>
    \`
  })
  export class ObservableComponent implements AfterViewInit {
      @ViewChild('herSexyButton') button: ElementRef;

      ngAfterViewInit() {
        const btnSubscription = Observable.fromEvent(this.button.nativeElement, 'click')
                            .subscribe(() => console.log('Clicked'));

      }
  }


  `
};
apip339 = {
  name: 'Button Scan',
  code: `

  import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

  import { Observable } from 'rxjs/Observable';
  import 'rxjs/add/observable/fromEvent';
  import { scan } from 'rxjs/operators';

  @Component({
    selector: 'app-observable',
    template: \`
            <button #herSexyButton>Click</button>
    \`
  })
  export class ObservableComponent implements AfterViewInit {
      @ViewChild('herSexyButton') button: ElementRef;

      ngAfterViewInit() {
        const btnSubscription =
                        Observable.fromEvent(this.button.nativeElement, 'click')
                                .pipe(
                                scan(count => count + 1, 0)
                                )
                                .subscribe((count) => console.log(\`Clicked \${count} times\`));
      }
  }

  `
};
apip340 = {
  name: 'Throttle Time',
  code: `
  import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

  import { Observable } from 'rxjs/Observable';
  import 'rxjs/add/observable/fromEvent';
  import { scan, throttleTime } from 'rxjs/operators';

  @Component({
    selector: 'app-observable',
    template: \`
            <button #herSexyButton>Click</button>
    \`
  })
  export class ObservableComponent implements AfterViewInit {
      @ViewChild('herSexyButton') button: ElementRef;

      ngAfterViewInit() {
        const btnSubscription = Observable.fromEvent(this.button.nativeElement, 'click').pipe(
                                  throttleTime(1000),
                                  scan(count => count + 1, 0)
                                )
                                .subscribe((count) => console.log(\`Clicked \${count} times\`));
      }
  }

  `
};
apip341 = {
  name: 'Map',
  code: `

  import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

  import { Observable } from 'rxjs/Observable';
  import 'rxjs/add/observable/fromEvent';
  import { scan, throttleTime, map } from 'rxjs/operators';

  @Component({
    selector: 'app-observable',
    template: \`
            <button #herSexyButton>Click</button>
    \`
  })
  export class ObservableComponent implements AfterViewInit {
      @ViewChild('herSexyButton') button: ElementRef;

      ngAfterViewInit() {
        const btnSubscription = Observable.fromEvent(this.button.nativeElement, 'click').pipe(
                                  throttleTime(1000),
                                  map(event => event.clientX),
                                  scan((count, clientX) => count + clientX, 0)
                                )
                                .subscribe((count) => console.log(count));
      }
  }

  `
};
apip342 = {
  name: 'Observable',
  code: `

  import { Component } from '@angular/core';

  import { Observable } from 'rxjs/Observable';


  @Component({
    selector: 'app-observable',
    template: \` \`
  })
  export class ObservableComponent {

    private myObservable = Observable.create((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      setTimeout(() => {
        observer.next(4);
        observer.complete();
      }, 1000);
      observer.next(5);
      observer.next(6);
  });


    constructor() {
      console.log('just before subscribe');
      this.myObservable.subscribe({
        next: x => console.log('got value ' + x),
        error: err => console.log('something wrong occured: ' + err),
        complete: () => console.log('done')
      });
      console.log('just after subscribe');
    }

  }


  `
};
apip343 = {
  name: 'Interval',
  code: `

  import { Component } from '@angular/core';

  import { Observable } from 'rxjs/Observable';
  import { interval } from 'rxjs/observable/interval';
  import { filter, map, take, toArray } from 'rxjs/operators';


  @Component({
    selector: 'app-observable',
    template: \` \`
  })
  export class ObservableComponent {

      takeEveryNth = (n: number) => <T>(source: Observable<T>) =>
                     new Observable<T>(observer => {
                      let count = 0;
                      return source.subscribe({
                        next(x) {
                          if (count++ % n === 0) {
                            observer.next(x);
                          }
                        },
                          error(err) { observer.error(err); },
                          complete() { observer.complete(); }
                      });
                     })
      takeEveryNthSimple = (n: number) => <T>(source: Observable<T>) =>
                        source.pipe(
                          filter((value, index) => index % n === 0)
                        )

     takeEveryNthSimplest = (n: number) => filter((value, index) => index % n === 0);



      constructor() {
              interval(1).pipe(
                  this.takeEveryNth(2),
                  map(x => x + x),
                  this.takeEveryNthSimple(3),
                  map(x => x * x),
                  this.takeEveryNthSimplest(4),
                  take(3),
                  toArray()
                  ).subscribe(x => console.log(x));
     }

  }

  `
};
apip344 = {
  name: 'Observables Generalizations Functions',
  code: `

  import { Component } from '@angular/core';

  import { Observable } from 'rxjs/Observable';

  @Component({
    selector: 'app-observable',
    template: \` \`
  })
  export class ObservableComponent {

            myFun = Observable.create((observer) => {
              console.log('Hi Baby ...');
              observer.next(42);
            });

            constructor() {
              this.myFun.subscribe((x) => console.log(x));
              this.myFun.subscribe((y) => console.log(y));
              this.myFun.subscribe((z) => console.log(z));
            }

  }

  `
};
apip345 = {
  name: 'Behavior Subject',
  code: `

  import { Component } from '@angular/core';

  import { BehaviorSubject } from 'rxjs/BehaviorSubject';

  @Component({
    selector: 'app-observable',
    template: \` \`
  })
  export class ObservableComponent {

      subject = new BehaviorSubject(100);

      constructor() {

        this.subject.subscribe({
          next: (v) => console.log('observerA: ' + v)
        });

        this.subject.next(101);
        this.subject.next(102);

        this.subject.subscribe({
          next: (v) => console.log('observerB: ' + v)
        });

        this.subject.next(103);

      }

  }

  `
};
apip346 = {
  name: 'Replay Subject',
  code: `

  import { Component } from '@angular/core';

  import { ReplaySubject } from 'rxjs/ReplaySubject';

  @Component({
    selector: 'app-observable',
    template: \` \`
  })
  export class ObservableComponent {

      subject = new ReplaySubject(2);

      constructor() {

        this.subject.subscribe({
          next: (v) => console.log('observerA: ' + v)
        });

        this.subject.next(1);
        this.subject.next(2);
        this.subject.next(3);
        this.subject.next(4);
        this.subject.next(5);
        this.subject.next(6);

        this.subject.subscribe({
          next: (v) => console.log('observerB: ' + v)
        });

        this.subject.next(7);

      }

  }

  `
};
apip347 = {
  name: 'Async Subject',
  code: `

  import { Component } from '@angular/core';

  import { AsyncSubject } from 'rxjs/AsyncSubject';

  @Component({
    selector: 'app-observable',
    template: \` \`
  })
  export class ObservableComponent {

      subject = new AsyncSubject();

      constructor() {

        this.subject.subscribe({
          next: (v) => console.log('observerA: ' + v)
        });

        this.subject.next(1);
        this.subject.next(2);
        this.subject.next(3);
        this.subject.next(4);
        this.subject.next(5);

        this.subject.subscribe({
          next: (v) => console.log('observerB: ' + v)
        });

        this.subject.next(6);
        this.subject.complete();

      }

  }

  `
};
apip348 = {
  name: 'Create',
  code: `

  import { Component } from '@angular/core';

  import { Observable } from 'rxjs/Observable';
  import 'rxjs/add/observable/from';


  @Component({
    selector: 'app-observable',
    template: \` \`
  })
  export class ObservableComponent {
      input = Observable.from([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]);
      multiplyByTen(input) {
        const output = Observable.create(function subscribe(observer) {
                  input.subscribe({
                  next: (cp) => observer.next(10 * cp),
                  error: (err) => observer.error(err),
                  complete: () => observer.complete()
              });
        });
        return output;
      }

      constructor() {
        const output = this.multiplyByTen(this.input);
        output.subscribe(a => console.log(a));
      }

  }

  `
};
apip349 = {
  name: 'Instance Operators',
  code: `

  import { Component } from '@angular/core';

  import { Observable } from 'rxjs/Observable';
  import 'rxjs/add/observable/from';


  @Component({
    selector: 'app-observable',
    template: \` \`
  })
  export class ObservableComponent {
      i = Observable.prototype.multiplyByTen = function multiplyByTen() {
        const input = this;
        return Observable.create(function subscribe(observer) {
                  input.subscribe({
                  next: (cp) => observer.next(10 * cp),
                  error: (err) => observer.error(err),
                  complete: () => observer.complete()
              });
        });
      };

      constructor() {
        const observable = Observable.from([2, 4, 8, 16, 32, 64, 128]).multiplyByTen();
        observable.subscribe(a => console.log(a));
      }

  }

  `
};
apip350 = {
  name: 'Scheduler',
  code: `

  import { Component } from '@angular/core';

  import { Observable } from 'rxjs/Observable';
  import { Scheduler } from 'rxjs/Scheduler';
  import { async } from 'rxjs/scheduler/async';
  import 'rxjs/add/operator/observeOn';


  @Component({
    selector: 'app-observable',
    template: \` \`
  })
  export class ObservableComponent {
      observable = Observable.create((observer) => {
          observer.next(10);
          observer.next(20);
          observer.next(30);
          observer.complete();
      })
      .observeOn(async);

      constructor() {
        console.log('just before subscribe');
        this.observable.subscribe({
          next: cp => console.log('got value ' + cp),
          error: err => console.log('something wrong occured ' + err),
          complete: () => console.log('done')
        });
        console.log('just after subscribe');
      }

  }

  `
};
apip351 = {
  name: 'Converting To Observables',
  code: `

          const obs = Observable.of('hi', 'baby', 'cpu2');
          const obsArr = Observable.from([1, 2, 3, 4, 5, 6]);
          const obsEvent = Observable.fromEvent(document.querySelector('button'), 'click');
          const obsProm = Observable.fromPromise(fetch('/data'));

  `
};
apip352 = {
  name: 'Creating Observables',
  code: `

  export class ObservableComponent {

    myObservable = new Subject();

    constructor() {
      this.myObservable.subscribe(value => console.log(value));
      this.myObservable.next('foo');
      this.myObservable.next('bar');
      this.myObservable.next('baz');

      const myObservable1 = Observable.create(observer => {
              observer.next('oof');
              setTimeout(() => observer.next('rab'), 500);
              setTimeout(() => observer.next('zab'), 1000);
      });
      myObservable1.subscribe(value => console.log(value));

    }

}

  `
};
apip353 = {
  name: 'Controlling The Flow',
  code: `

  import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

  import { Observable } from 'rxjs/Observable';
  import 'rxjs/add/observable/fromEvent';
  import { filter, map, delay, throttleTime,
           debounceTime, take, takeUntil } from 'rxjs/operators';


  @Component({
    selector: 'app-observable',
    template: \`

          <input type="text" #box>
          <button #herSexyButton>Button</button>

    \`
  })
  export class ObservableComponent implements AfterViewInit {
      @ViewChild('box') input: ElementRef;
      @ViewChild('herSexyButton') button: ElementRef;

      constructor() { }

      ngAfterViewInit() {
        const input = Observable.fromEvent(this.input.nativeElement, 'input');

        input.pipe(
          filter(event => event.target.value.length > 3),
          map(event => event.target.value)
        )
        .subscribe(value => console.log(value));

        input.pipe(
          delay(2000),
          map(event => event.target.value)
        )
        .subscribe(value => console.log(value));

        input.pipe(
          throttleTime(200),
          map(event => event.target.value)
        )
        .subscribe(value => console.log(value));

        input.pipe(
          debounceTime(200),
          map(event => event.target.value)
        )
        .subscribe(value => console.log(value));

        input.pipe(
          take(3),
          map(event => event.target.value)
        )
        .subscribe(value => console.log(value));

        const stopStream = Observable.fromEvent(this.button.nativeElement, 'click');
        input.pipe(
          takeUntil(stopStream),
          map(event => event.target.value)
        )
        .subscribe(value => console.log(value));

      }

  }

  `
};
apip354 = {
  name: 'Producing Values',
  code: `

  import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

  import { Observable } from 'rxjs/Observable';
  import 'rxjs/add/observable/fromEvent';
  import { map, pluck, pairwise, distinct, distinctUntilChanged } from 'rxjs/operators';


  @Component({
    selector: 'app-observable',
    template: \`

          <input type="text" #box>

    \`
  })
  export class ObservableComponent implements AfterViewInit {
      @ViewChild('box') input: ElementRef;

      constructor() { }

      ngAfterViewInit() {
        const input = Observable.fromEvent(this.input.nativeElement, 'input');

        input.pipe(
          map(event => event.target.value)
        )
        .subscribe(value => console.log(value));

        input.pipe(
          pluck('target', 'value')
        )
        .subscribe(value => console.log(value));

        input.pipe(
          pluck('target', 'value'),
          pairwise()
        )
        .subscribe(value => console.log(value));

        input.pipe(
          pluck('target', 'value'),
          distinct()
        )
        .subscribe(value => console.log(value));

        input.pipe(
          pluck('target', 'value'),
          distinctUntilChanged()
        )
        .subscribe(value => console.log(value));

      }

  }

  `
};
apip355 = {
  name: 'Simple Store',
  code: `

  import { BehaviorSubject } from 'rxjs/BehaviorSubject';
  import { Observable } from 'rxjs/Observable';

  export interface StoreOptions {
    debug?: boolean;
    mutateState?: boolean;
  }

  export abstract class Store<T extends object> extends Observable<T> {
    private stateSubject: BehaviorSubject<T>;
    private options: StoreOptions;

    get state() {
      return this.stateSubject.value;
    }

    constructor(initialState: T, options: StoreOptions = {}) {
      const stateSubject = new BehaviorSubject(initialState);
      super(observer => stateSubject.subscribe(observer));
      this.stateSubject = stateSubject;
      this.options = options;
    }

    protected mutate(newState: Partial<T>) {
      const state = this.options.mutateState ?
      Object.assign(this.state, newState) : Object.assign({}, this.state, newState);
      if (this.options.debug) {
        console.log(\`State changed [\${this.constructor.name}]:\`, state);
      }
      this.stateSubject.next(state);
    }

  }

  `
};
apip356 = {
  name: 'State Function',
  code: `

  import { Component } from '@angular/core';

  import { animate, state, style, transition, trigger } from '@angular/animations';

  @Component({
    selector: 'app-animations',
    template: \`
                <button (click)="expand()">Open</button>
                <button (click)="collapse()">Closed</button>
                <hr>
                <div class="toggle-container" [@openClose]="stateExpression">
                      Look at this box
                </div>
    \`,
    styles: [\`
          .toggle-container {
            background-color: white;
            border: 10px solid black;
            width: 200px;
            text-align: center;
            line-height: 100px;
            font-size: 50px;
            box-sizing: border-box;
            overflow: hidden;
          }

    \`],
    animations: [trigger(
      'openClose',
      [
        state('collapsed, void', style({height: '0px', color: 'red', borderColor: 'red'})),
        state('expanded', style({height: '*', borderColor: 'green', color: 'green'})),
        transition('collapsed <=> expanded',
                   [animate(1000, style({height: '250px'})), animate(1000)])
      ]
    )]
  })
  export class AnimationsComponent {
    stateExpression: string;

    constructor() {
      this.collapse();
    }

    expand() {
      this.stateExpression = 'expanded';
    }

    collapse() {
      this.stateExpression = 'collapsed';
    }

  }

  `
};
apip357 = {
  name: 'Query Function',
  code: `

  import { Component } from '@angular/core';

  import { animate, style, transition, trigger, query } from '@angular/animations';

  @Component({
    selector: 'app-animations',
    template: \`
               <div [@queryAnimation]>
                  <h1>Title</h1>
                  <div class="content">
                    {{ message }}
                  </div>
               </div>
    \`,
    animations: [
      trigger('queryAnimation', [
        transition('* => *', [
          query('h1', style({opacity: 0})),
          query('.content', style({opacity: 0})),
          query('h1', animate(1000, style({opacity: 1}))),
          query('.content', animate(1000, style({opacity: 1}))),
        ])
      ])
    ]
  })
  export class AnimationsComponent {
    title = 'Hello Animations';
    message = 'The will to win is nothing without the will to prepare.';

  }

  `
};
apip358 = {
  name: 'Animate Child Function',
  code: `

  import { Component } from '@angular/core';

  import { animate, style, transition, trigger, query } from '@angular/animations';

  @Component({
    selector: 'app-animations',
    template: \`
                <button (click)="exp = !exp">Toggle</button>
                <hr>

                <div [@parentAnimation]="exp">
                <header>Hello</header>
                <div [@childAnimation]="exp">
                      one
                </div>
                <div [@childAnimation]="exp">
                      two
                </div>
                <div [@childAnimation]="exp">
                      three
                </div>
    \`,
    animations: [
      trigger(
      'parentAnimation', [
        transition('false => true', [
          query('header', [
            style({ opacity: 0}),
            animate(1000, style({ opacity: 1}))
          ]),
          query('@childAnimation', [
            animateChild()
          ])
        ])
      ]),
      trigger('childAnimation', [
        transition('false => true', [
          style({opacity: 0}),
          animate(1000, style({ opacity: 1}))
        ])
      ])
    ]
  })
  export class AnimationsComponent {
    exp = false;

  }

  `
};
apip359 = {
  name: 'Stagger Function',
  code: `

  import { Component } from '@angular/core';

  import { animate, query, stagger, state,
           style, transition, trigger } from '@angular/animations';

    @Component({
      selector: 'app-animations',
      template: \`
                  <button (click)="toggle()">Show / Hide Items</button>
                  <hr>
                  <div [@listAnimation]="items.length">
                        <div *ngFor="let item of items">
                              {{ item }}
                        </div>
                  </div>
      \`,
      animations: [trigger(
        'listAnimation',
        [
          transition('* => *', [
            query(':leave', [
              stagger(100, [
                animate('1s', style({ opacity: 0}))
              ])
            ]),
            query(':enter', [
              style({ opacity: 0}),
              stagger(100, [
                animate('1s', style({ opacity: 1}))
              ])
            ])
          ])
        ]
      )],
    })
    export class AnimationsComponent {
      items = [];

      showItems() {
        this.items = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
      }

      hideItems() {
        this.items = [];
      }

      toggle() {
        this.items.length ? this.hideItems() : this.showItems();
      }

    }

  `
};
apip360 = {
  name: 'Transition Function',
  code: `

  import { Component } from '@angular/core';

  import { group, animate, query, style, transition, trigger } from '@angular/animations';

    @Component({
      selector: 'app-animations',
      template: \`
                  <button (click)="previous()">Previous</button>
                  <button (click)="next()">Next</button>
                  <hr>
                  <div [@bannerAnimation]="selectedIndex" class="banner-container">
                          <div class="banner" *ngFor="let banner of banners">
                            {{ banner }}
                          </div>
                  </div>
      \`,
      styles: [\`
          .banner-container {
            position: relative;
            height: 500px;
            overflow: hidden;
          }
          .banner-container > .banner {
            position: absolute;
            left: 0;
            top: 0;
            font-size: 200px;
            line-height: 500px;
            font-weight: bold;
            text-align: center;
            width: 100%;
          }

      \`],
      animations: [trigger(
        'bannerAnimation',
        [
          transition(':increment', group([
            query(':enter', [
              style({ left: '100%'}),
              animate('0.5s ease-out', style('*'))
            ]),
            query(':leave', [
              animate('0.5s ease-out', style({ left: '-100%'}))
            ])
          ])),
          transition(':decrement', group([
            query(':enter', [
              style({ left: '-100%'}),
              animate('0.5s ease-out', style('*'))
            ]),
            query(':leave', [
              animate('0.5s ease-out', style({ left: '100%'}))
            ])
          ]))
        ]
      )],
    })
    export class AnimationsComponent {
      private allBanners = ['1', '2', '3', '4'];
      selectedIndex = 0;

      get banners() {
        return [this.allBanners[this.selectedIndex]];
      }

      previous() {
        this.selectedIndex = Math.max(this.selectedIndex - 1, 0);
      }

      next() {
        this.selectedIndex = Math.max(this.selectedIndex + 1, this.allBanners.length - 1);
      }

    }

  `
};
apip361 = {
  name: 'AfterContentChecked Interface',
  code: `

  import { Component, AfterContentChecked } from '@angular/core';

  @Component({
    selector: 'app-core',
    template: \`
            <h3>{{ message }}</h3>
    \`
  })
  export class CoreComponent implements AfterContentChecked {
    message = 'I love you ...';

    constructor() { }

    // lifecycle hook that is called after every check of a directive's content
    ngAfterContentChecked() {
      console.log('ngAfterContentChecked() called');
    }

  }


  `
};
apip362 = {
  name: 'AfterViewInit Interface',
  code: `

  import { Component, AfterViewInit } from '@angular/core';

  @Component({
    selector: 'app-core',
    template: \`
            <h3>{{ message }}</h3>
    \`
  })
  export class CoreComponent implements AfterViewInit {
    message = 'I love you ...';

    constructor() { }

    // lifecycle hook that is called after a component's view has been fully initialized
    ngAfterViewInit() {
      console.log('ngAfterViewInit() called');
    }

  }

  `
};
apip363 = {
  name: 'Component Decorator',
  code: `

  import { Component } from '@angular/core';

  // marks a class as an angular component and collects component configuration metadata

  @Component({
    changeDetection?: ChangeDetectionStrategy
    viewProviders?: Provider[]
    moduleId?: string
    templateUrl?: string
    template?: string
    styleUrls?: string[]
    styles?: string[]
    animations?: any[]
    encapsulation?: ViewEncapsulation
    interpolation?: [string, string]
    entryComponents?: Array<Type<any> | any[]>
    preserveWhitespaces?: boolean
    // inherited from core/Directive
    selector?: string
    inputs?: string[]
    outputs?: string[]
    host?: { ... }
    providers?: Provider[]
    exportAs?: string
    queries?: { ... }
  })

  @Component({
    selector: 'app-core',
    template: \`
            <h3>{{ message }}</h3>
    \`
  })
  export class CoreComponent {
    message = 'I love you ...';

    constructor() { }

  }

  `
};
apip364 = {
  name: 'NgModule Decorator',
  code: `

  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  import { RouterModule, Routes } from '@angular/router';
  import { FormsModule } from '@angular/forms';
  import { HttpClientModule } from '@angular/common/http';

  import { AppComponent } from './app.component';
  import { AnimationsComponent } from './animations/animations.component';
  import { CoreComponent } from './core/core.component';

  @NgModule({
    declarations: [
      AppComponent,
      AnimationsComponent,
      CoreComponent
    ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }

  @NgModule({
    providers?: Provider[]
    declarations?: Array<Type<any> | any[]>
    imports?: Array<Type<any> | ModuleWithProviders | any[]>
    exports?: Array<Type<any> | any[]>
    entryComponents?: Array<Type<any> | any[]>
    bootstrap?: Array<Type<any> | any[]>
    schemas?: Array<SchemaMetadata | any[]>
    id?: string
  })


  `
};
apip365 = {
  name: 'OnInit Interface',
  code: `

  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-core',
    template: \`
            <h3>{{ message }}</h3>
    \`
  })
  export class CoreComponent implements OnInit {
    message = 'I love you ...';

    constructor() { }

    // lifecycle hook that is called after data bound properties
    // of a directive are initialized
    ngOnInit() {
      console.log('ngOnInit() called');
    }

  }

  `
};
apip366 = {
  name: 'Renderer2 Class',
  code: `

  class Renderer2 {
    get data: {...}
    destroy(): void
    createElement(name: string, namespace?: string | null): any
    createComment(value: string): any
    createText(value: string): any
    destroyNode: ((node: any) => void ) | null
    appendChild(parent: any, newChild: any): void
    insertBefore(parent: any, newChild: any, refChild: any): void
    removeChild(parent: any, oldChild: any): void
    selectRootElement(selectorOrNode: string | any): any
    parentNode(node: any): any
    nextSibling(node: any): any
    setAttribute(el: any, name: string, value: string, namespace?: string | null): void
    removeAttribute(el: any, name: string, namespace?: string | null): void
    addClass(el: any, name: string): void
    removeClass(el: any, name: string): void
    setStyle(el: any, style: string, value: any, flags?: RendererStyleFlags2): void
    removeStyle(el: any, style: string, flags?: RendererStyleFlags2): void
    setProperty(el: any, name: string, value: any): void
    setValue(node: any, value: string): void
    listen(target: 'window' | 'document' | 'body' | any, eventName: string,
          callback: (event: any) => boolean | void): () => void
  }

  `
};
apip367 = {
  name: 'SimpleChanges Interface',
  code: `

          interface SimpleChanges {
            __index(propName: string): SimpleChange
          }

  `
};
apip368 = {
  name: 'Type Interface',
  code: `

            // represents a type that a component or other object is instances of

            interface Type<T> extends Function {
              new (...args: any[]): T
            }

  `
};
apip369 = {
  name: 'ViewChildren Decorator',
  code: `

    import { Component, Input, AfterViewInit,
    Directive, QueryList, ViewChildren } from '@angular/core';

    @Directive({
        selector: 'app-pane'
      })
    export class PaneComponent {
      @Input() id: string;

    }

    @Component({
        selector: 'app-core',
        template: \`
          <app-pane id="1"></app-pane>
          <app-pane id="2"></app-pane>
          <app-pane id="3" *ngIf="shouldShow"></app-pane>

          <button (click)="show()">Show 3</button>

          <div>panes: {{ serializedPanes }}</div>
      \`
  })
  export class CoreComponent implements AfterViewInit {
      @ViewChildren(PaneComponent) panes: QueryList<PaneComponent>;
      serializedPanes = '';

      shouldShow = false;

      show() {
          this.shouldShow = true;
      }

      ngAfterViewInit() {
          this.calculateSerializedPanes();
          this.panes.changes.subscribe((r) => { this.calculateSerializedPanes(); });
      }

      calculateSerializedPanes() {
          setTimeout(() => {
          this.serializedPanes = this.panes.map(p => p.id).join(', ');
      }, 0);
    }

  }

  `
};
apip370 = {
  name: 'ChangeDetectorRef Class',
  code: `

  import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

  @Component({
    selector: 'app-cmp',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: \`
            Number of ticks: {{ numberOfTicks }}
    \`
  })
  export class MyComponent {
    numberOfTicks = 0;

    constructor(private ref: ChangeDetectorRef) {
      setInterval(() => {
              this.numberOfTicks++;
              this.ref.markForCheck();
      }, 1000);
    }

  }

  @Component({
    selector: 'app-core',
    template: \`
            <app-cmp></app-cmp>
    \`
  })
  export class CoreComponent { }

  ***************************************************************

  import { Component, ChangeDetectorRef } from '@angular/core';

export class DataProvider {
  get data() {
    return [1, 2, 3, 4, 5, 6, 7, 8];
  }
}

@Component({
  selector: 'app-giant-list',
  template: \`
          <li *ngFor="let d of dataProvider.data">Data {{ d }}</li>
  \`
})
export class GiantListComponent {

        constructor(private ref: ChangeDetectorRef,
                    public dataProvider: DataProvider) {
                    this.ref.detach();
                    setInterval(() => {
                        this.ref.detectChanges();
                    }, 5000);
        }
}

@Component({
  selector: 'app-core',
  providers: [DataProvider],
  template: \`
            <app-giant-list></app-giant-list>
  \`
})
export class CoreComponent { }

***************************************************************

import { Component, ChangeDetectorRef } from '@angular/core';

export class DataProvider {
  data = 100;


  constructor() {
    setInterval(() => {
        this.data = this.data * 8;
    }, 500);
  }
}

@Component({
  selector: 'app-live-data',
  inputs: ['live'],
  template: \`
          Data: {{ dataProvider.data }}
  \`
})
export class LiveDataComponent {

        constructor(private ref: ChangeDetectorRef,
                    public dataProvider: DataProvider) { }

        set live(value) {
          if (value) {
            this.ref.reattach();
          } else {
            this.ref.detach();
          }
        }

}

@Component({
  selector: 'app-core',
  providers: [DataProvider],
  template: \`
            Live Update: <input type="checkbox" [(ngModel)]="live">
            <app-live-data [live]="live"><app-live-data>
  \`
})
export class CoreComponent {
  live = true;

}

  `
};
apip371 = {
  name: 'AfterContentInit Interface',
  code: `
  import { Component, AfterContentInit } from '@angular/core';

  @Component({
    selector: 'app-core',
    template: \` \`
  })
  export class CoreComponent implements AfterContentInit {

      // lifecycle hook that is called after a directive's content
      // has been fully initialized

      ngAfterContentInit() {
          console.log('ngAfterContentInit() called');
      }

  }

  `
};
apip372 = {
  name: 'ContentChild Decorator',
  code: `

  import { Component, Input, AfterContentInit, ContentChild, Directive } from '@angular/core';

  @Directive({
    selector: 'app-pane'
  })
  export class PaneDirective {
        @Input() id: string;
  }

  @Component({
    selector: 'app-tab',
    template: \`
          <div>pane: {{ pane?.id }}</div>
    \`
  })
  export class TabComponent {
          @ContentChild(PaneDirective) pane: PaneDirective;
  }

  @Component({
    selector: 'app-core',
    template: \`

              <app-tab>
                        <app-pane id="1" *ngIf="shouldShow"></app-pane>
                        <app-pane id="2" *ngIf="!shouldShow"></app-pane>
              </app-tab>

              <button (click)="toggle()">Toggle</button>
    \`
  })
  export class CoreComponent {
      shouldShow = true;

      toggle() {
        this.shouldShow = !this.shouldShow;
      }
  }

  `
};
apip373 = {
  name: 'Directive Decorator',
  code: `

  import { Component, Directive } from '@angular/core';

  // marks a class as an angular directive and collects configuration metadata

  @Directive({
    selector?: string
    inputs?: string[]
    outputs?: string[]
    host?: { ... }
    providers?: Provider[]
    exportAs?: string
    queries?: { ... }
  })

  @Component({
    selector: 'app-bank-account',
    inputs: ['bankName: bank-name', 'id: account-id'],
    template: \`
              Bank Name: {{ bankName }}
              Account Id: {{ id }}
    \`
  })
  export class BankAccountComponent {
    bankName: string;
    id: string;
   }


  @Component({
    selector: 'app-core',
    template: \`

          <app-bank-account bank-name="RBC" account-id="4747"></app-bank-account>

    \`
  })
  export class CoreComponent {

  }

  *******************************************************************

  import { Component, Directive, EventEmitter } from '@angular/core';

  @Directive({
  selector: 'app-interval-dir',
  outputs: ['everySecond', 'three3Secs: everyThreeSeconds']
  })
  export class IntervalDirective {
    everySecond = new EventEmitter();
    three3Secs = new EventEmitter();

    constructor() {
      setInterval(() => this.everySecond.emit('event'), 1000);
      setInterval(() => this.three3Secs.emit('event'), 3000);
  }

}


@Component({
  selector: 'app-core',
  template: \`
        <app-interval-dir (everySecond)="everySecond()"
                          (everyThreeSeconds)="everyThreeSeconds()">
        </app-interval-dir>
  \`
})
export class CoreComponent {

          everySecond() {
            console.log('second');
          }
          everyThreeSeconds() {
            console.log('three seconds');
          }

}


*******************************************************************

import { Component, Directive } from '@angular/core';

@Directive({
  selector: 'button[counting]',
  host: { '(click)': 'onClick($event.target)' }
})
export class CountClicksDirective {
       numberOfClicks = 0;

       onClick(btn) {
         console.log('button', btn, 'number of clicks: ', this.numberOfClicks++);
       }
}


@Component({
  selector: 'app-core',
  template: \`
        <button counting>Increment</button>
  \`
})
export class CoreComponent { }


*******************************************************************

import { Component, Directive } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[ngModel]',
  host: {
        '[class.valid]': 'valid',
        '[class.invalid]' : 'invalid'
      }
})
export class NgModelStatusDirective {
       constructor(public control: NgModel) { }

       get valid() { return this.control.valid; }
       get invalid() { return this.control.invalid; }
}


@Component({
  selector: 'app-core',
  template: \`
        <input [(ngModel)]="prop">
  \`
})
export class CoreComponent {
  prop;
}

  `
};
apip374 = {
  name: 'Component Interpolation',
  code: `

  import { Component } from '@angular/core';

  @Component({
    selector: 'app-news',
    template: \`
          <p>{{ currentDate | date }}</p>
          <h1>{{ title }}</h1>
          <h3>Written by: {{ author }}</h3>
    \`
  })
  export class NewsComponent {

    currentDate = new Date();
    title = 'Angular 6 Love Affair';
    author = 'Nils';

  }

  `
};
apip375 = {
  name: 'Component Input',
  code: `
  import { Component, Input } from '@angular/core';

  @Component({
    selector: 'app-attribution',
    template: \`
        <h3>Written by: {{ author }}</h3>
    \`
  })
  export class AttributionComponent {
    @Input() author: string;
  }

  @Component({
    selector: 'app-news',
    template: \`
          <p>{{ currentDate | date }}</p>
          <h1>{{ title }}</h1>
          <app-attribution [author]="author"></app-attribution>
    \`
  })
  export class NewsComponent {

    currentDate = new Date();
    title = 'ES6/7/8 Exploration';
    author = 'Nils';

  }

  `
};
apip376 = {
  name: 'Native Element Attribute Binding',
  code: `

  import { Component } from '@angular/core';

  @Component({
    selector: 'app-news',
    template: \`
          <img [src]="logoImageUrl">
    \`
  })
  export class NewsComponent {

      logoImageUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';

  }

  `
};
apip377 = {
  name: 'Registering Handlers On Native Browser Events',
  code: `

  import { Component } from '@angular/core';


  @Component({
    selector: 'app-news',
    template: \`
          <h1>{{ title }}</h1>
          <p>Likes: {{ likeCount }}</p>
          <button (click)="like()">Like</button>
    \`
  })
  export class NewsComponent {
          title = 'Single Page Applications are the Future of the Web with AI && VR';
          likeCount = 0;
          like() {
            ++this.likeCount;
          }
  }

  `
};
apip378 = {
  name: 'Custom Events With EventEmitter',
  code: `

  import { Component, EventEmitter, Output } from '@angular/core';

  @Component({
    selector: 'app-text-editor',
    template: \`
            <textarea (keyup)="emitWordCount($event)"></textarea>
    \`
  })
  export class TextEditorComponent {
    @Output() countUpdate = new EventEmitter<number>();

    emitWordCount(e: Event) {
      this.countUpdate.emit((e.target.value.match(/\S+/g) || []).length);
    }
  }


  @Component({
    selector: 'app-news',
    template: \`
          <h1>{{ title }}</h1>
          <p>Word count: {{ wordCount }}</p>
          <app-text-editor (countUpdate)="updateWordCount($event)">
          </app-text-editor>
    \`
  })
  export class NewsComponent {
          title = 'Single Page Applications are the Future of the Web with AI && VR';
          wordCount = 0;

          updateWordCount(count: number): void {
            this.wordCount = count;
          }

  }

  `
};
apip379 = {
  name: 'Attaching Behavior DOM Elements With Directives',
  code: `

  import { Component, Directive, HostListener } from '@angular/core';

  @Directive({
    selector: '[app-click-to-reveal]'
  })
  export class ClickToRevealDirective {
    @HostListener('click', ['$event.target'])
      reveal(target) {
        target.style['white-space'] = 'normal';
    }
  }


  @Component({
    selector: 'app-news',
    template: \`
          <h1 app-click-to-reveal>{{ title }}</h1>
    \`,
    styles: [\`
      h1 {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        max-width: 300px;
      }
    \`]
  })
  export class NewsComponent {
          title = \`Push it baby, Push it. Desugar, decompose.
                   You will need a pound of sugar a day to keep up with me.\`;

  }

  `
};
apip380 = {
  name: 'NgContent Project Nested Content',
  code: `

  import { Component } from '@angular/core';

  @Component({
    selector: 'app-ad-section',
    template: \`
            <a href="#">{{ adText }}</a>
            <ng-content select="p"></ng-content>
    \`
  })
  export class AdSectionComponent {
    adText = 'Loved by millions of Developers worldwide ...';
  }


  @Component({
    selector: 'app-news',
    template: \`
          <h1>{{ title }}</h1>
          <app-ad-section>
              <p>Angular to make the Web more beautiful and open.</p>
              <p>An Open Source World full of knowledge, peace and love.</p>
          </app-ad-section>
          \`
  })
  export class NewsComponent {
          title = 'Angular here to save the world!!!';

  }

  `
};
apip381 = {
  name: 'DOM Control With Structural Directives NgFor && NgIf',
  code: `

  import { Component } from '@angular/core';

  @Component({
    selector: 'app-news',
    template: \`
          <div *ngFor="let article of articles; let i = index;">
                <h1 *ngIf="article.active">
                        ({{ i }}): {{ article.title }}
                </h1>
          </div>
          \`
  })
  export class NewsComponent {

        articles: Object[] = [
          { title: 'Foo', active: true },
          { title: 'Bar', active: false },
          { title: 'Baz', active: true }
        ];

  }

  `
};
apip382 = {
  name: 'Template Reference Variables Reference Elements',
  code: `

  import { Component } from '@angular/core';

  @Component({
    selector: 'app-news',
    template: \`
            <input #box (keyup)="0">
            <h1>{{ box.value }}</h1>
          \`
  })
  export class NewsComponent { }

  `
};
apip383 = {
  name: 'Attribute Property Binding',
  code: `

  import { Component } from '@angular/core';

  @Component({
    selector: 'app-news',
    template: \`
            <input #box
                    (keyup.enter)="setValue(box.value)"
                    (keyup)="checkStale(box.value)">
            <h1 [style.color]="isStale ? 'red' : 'green'">
                {{ myBox }}
            </h1>
          \`
  })
  export class NewsComponent {
          isStale = false;
          myBox = '';

          setValue(input: string) {
            this.myBox = input;
          }

          checkStale(input: string): void {
            this.isStale = input !== this.myBox;
          }

  }

  `
};
apip384 = {
  name: 'Lifecycle Hooks',
  code: `

  import { Component, Input, OnInit, OnDestroy } from '@angular/core';

  @Component({
    selector: 'app-article',
    template: \`
            <h1>
                  <ng-content></ng-content>{{ articleTitle }}
            </h1>
    \`
  })
  export class ArticleComponent implements OnInit, OnDestroy {
        @Input() articleTitle: string;

        ngOnInit() {
          console.log('created', this.articleTitle);
        }

        ngOnDestroy() {
          console.log('destroyed', this.articleTitle);
        }
  }

  @Component({
    selector: 'app-news',
    template: \`
            <input (keyup.enter)="add($event)">
            <app-article *ngFor="let title of titles; let i = index;"
                          [articleTitle]="title">
            <button (click)="remove(i)">X</button>
          \`
  })
  export class NewsComponent {
          titles: string[] = [];

          add(e: Event): void {
            this.titles.push(e.target.value);
            e.target.value = '';
          }

          remove(index: number): void {
            this.titles.splice(index, 1);
          }

  }

  `
};
apip385 = {
  name: 'Referencing Parent Component From Child Component',
  code: `

  import { Component, Input } from '@angular/core';

  @Component({
    selector: 'app-feedback',
    template: \`
            <h1>
                  Number of likes: {{ value }}
            </h1>
            <button (click)="likeArticle()">Like this article</button>
    \`
  })
  export class FeedbackComponent {
      @Input() value: number;

      constructor(private newsComponent: NewsComponent) { }

      likeArticle(): void {
        this.newsComponent.incrementLikes();
      }

  }

  @Component({
    selector: 'app-news',
    template: \`
            <app-feedback [value]="likes"></app-feedback>
          \`
  })
  export class NewsComponent {
          likes = 0;

          incrementLikes() {
            this.likes++;
          }

  }
  `
};
apip386 = {
  name: 'ViewChild && ForwardRef Mutual Parent-Child Awareness',
  code: `

  import { Component, Input, Inject, forwardRef, ViewChild } from '@angular/core';

  @Component({
    selector: 'app-feedback',
    template: \`
            <h1>
                  Number of likes: {{ value }}
            </h1>
            <button (click)="likeArticle()"
                    [disabled]="!likeEnabled">
                  Like this article
            </button>
    \`
  })
  export class FeedbackComponent {
      @Input() value: number;

      likeEnabled = false;

      constructor(@Inject(forwardRef(() => NewsComponent))
                          private newsComponent: NewsComponent) { }

      likeArticle(): void {
        this.newsComponent.incrementLikes();
      }

      setLikeEnabled(newEnabledStatus: boolean): void {
        this.likeEnabled = newEnabledStatus;
      }

  }

  @Component({
    selector: 'app-news',
    template: \`
            <input type="checkbox" (click)="changeLikesEnabled($event)">
            <app-feedback [value]="likes"></app-feedback>
          \`
  })
  export class NewsComponent {
    @ViewChild(FeedbackComponent) feedbackComponent: FeedbackComponent;
    likes = 0;

    incrementLikes() {
        this.likes++;
    }

    changeLikesEnabled(e: Event): void {
      this.feedbackComponent.setLikeEnabled(e.target.checked);
    }

  }

  `
};
apip387 = {
  name: 'ContentChild && ForwardRef Mutual Parent-Child Awareness',
  code: `

  import { Component, Inject, forwardRef, ContentChild } from '@angular/core';

  @Component({
    selector: 'app-feedback',
    template: \`
            <h1>
                  Number of likes: {{ value }}
            </h1>
            <button (click)="likeArticle()"
                    [disabled]="!likeEnabled">
                  Like this article
            </button>
    \`
  })
  export class FeedbackComponent {
      value: number;

      likeEnabled = false;

      constructor(@Inject(forwardRef(() => NewsComponent))
                          private newsComponent: NewsComponent) {
                            this.updateLikes();
                           }

      likeArticle(): void {
        this.newsComponent.incrementLikes();
        this.updateLikes();
      }

      updateLikes() {
        this.value = this.newsComponent.likes;
      }

      setLikeEnabled(newEnabledStatus: boolean): void {
        this.likeEnabled = newEnabledStatus;
      }

  }

  @Component({
    selector: 'app-news',
    template: \`
            <input type="checkbox" (click)="changeLikesEnabled($event)">
            <ng-content></ng-content>
          \`
  })
  export class NewsComponent {
    @ContentChild(FeedbackComponent) feedbackComponent: FeedbackComponent;
    likes = 0;

    incrementLikes() {
        this.likes++;
    }

    changeLikesEnabled(e: Event): void {
      this.feedbackComponent.setLikeEnabled(e.target.checked);
    }

  }

  *****************************************************************
  Root App Component Transclusion

  <app-news>
        <app-feedback></app-feedback>
  </app-news>

  `
};
apip388 = {
  name: 'NgModel Two-Way Binding',
  code: `

  import { Component } from '@angular/core';

  @Component({
    selector: 'app-news',
    template: \`
              <h1>{{ title }}</h1>
              <input [(ngModel)]="title">
              <input [(ngModel)]="title">
              <input [(ngModel)]="title">
          \`
  })
  export class NewsComponent {
      title = '';
  }
  `
};
apip389 = {
  name: 'Form Group Bundle Controls',
  code: `

  import { Component } from '@angular/core';
  import { FormControl, FormGroup, Validators } from '@angular/forms';

  @Component({
    selector: 'app-news',
    template: \`
            <p>Title: <input [formControl]="titleControl"></p>
            <p>Text: <input [formControl]="textControl"></p>
            <p><button (click)="saveArticle()">Save</button></p>
            <hr>
            <p>Preview:</p>
            <div style="border: 1px solid #999; margin: 1px;">
                <h1>{{ article.title }}</h1>
                <p>{{ article.text }}</p>
            </div>

    \`
  })
  export class NewsComponent {
          article = { title: '', text: ''};

          titleControl = new FormControl(null, Validators.required);
          textControl = new FormControl(null, Validators.required);

          articleFormGroup = new FormGroup({
            title: this.titleControl,
            text: this.textControl
          });

          saveArticle() {
            if (this.articleFormGroup.valid) {
              this.article = this.articleFormGroup.value;
            } else {
              console.log('Missing field(s)!');
            }
          }

   }


  `
};
apip390 = {
  name: 'Form Array Bundle Form Controls',
  code: `

  import { Component } from '@angular/core';
  import { FormControl, FormArray, Validators } from '@angular/forms';

  @Component({
    selector: 'app-news',
    template: \`
            <p>Tags:</p>
            <ul>
                <li *ngFor="let tag of tags;">
                    <input [formControl]="tag">
                </li>
            </ul>
            <p><button (click)="addTag()">++</button></p>
            <p><button (click)="saveArticle()">Save</button></p>

    \`
  })
  export class NewsComponent {
          tags: Array<FormControl> = [];
          tagFormArray: FormArray = new FormArray(this.tags);

          addTag(): void {
            this.tagFormArray.push(new FormControl(null, Validators.required));
          }

          saveArticle() {
            if (this.tagFormArray.valid) {
              alert('Valid!');
            } else {
              alert('Missing field(s)!');
            }
          }

   }

  `
};
apip391 = {
  name: 'NgForm Basic Form',
  code: `

  import { Component } from '@angular/core';
  import { NgForm } from '@angular/forms';

  @Component({
    selector: 'app-news',
    template: \`
            <form #myForm="ngForm" (ngSubmit)="saveArticle(myForm)">
                <p><input ngModel name="title" placeholder="Title"></p>
                <p><input ngModel name="text" placeholder="Text"></p>
                <p><button type="submit">Save</button></p>
            </form>
    \`
  })
  export class NewsComponent {
        saveArticle(form: NgForm) {
            console.log(form.value);
        }
   }

  `
};
apip392 = {
  name: 'FormBuilder Basic Form',
  code: `

  import { Component, Inject } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';

  @Component({
    selector: 'app-news',
    template: \`
            <form [formGroup]="articleGroup" (ngSubmit)="saveArticle()">
              <div formGroupName="article">
                    <p><input formControlName="title" placeholder="Title"></p>
                    <p><textarea formControlName="text" placeholder="Text"></textarea></p>
              </div>
              <p><button type="submit">Save</button></p>
            </form>
    \`
  })
  export class NewsComponent {
          articleGroup: FormGroup;

          constructor(@Inject(FormBuilder) formBuilder: FormBuilder) {
            this.articleGroup = formBuilder.group({
              article: formBuilder.group({
                title: [null, Validators.required],
                text: [null, Validators.required]
              })
            });
          }

          saveArticle(): void {
            console.log(this.articleGroup.value);
          }

   }


  `
};
apip393 = {
  name: 'Custom Validator',
  code: `

  import { Component } from '@angular/core';
  import { FormControl, Validators } from '@angular/forms';

  @Component({
    selector: 'app-news',
    template: \`
            <h2>Improve, Improve, Improve ...</h2>
            <textarea [formControl]="body" placeholder="Text"></textarea>
            <p><button (click)="saveArticle()">Save</button></p>
    \`
  })
  export class NewsComponent {
          body = new FormControl(null,
          [Validators.required, this.wordCountValidator]);

          wordCountValidator(formControl: FormControl): {[key: string]: any} {
            const wordCount = ((formControl.value || '').match(/\S+/g) || []).length;
            return wordCount <= 5 ? null : { maxwords: { limit: 5, actual: wordCount }};
          }

          saveArticle(): void {
            console.log(this.body);
            if (this.body.valid) {
              alert('Valid!');
            } else {
              alert('Invalid!');
            }
          }

   }

  `
};
apip394 = {
  name: 'HttpClient Basic Observable',
  code: `

  import { Component, OnInit, OnDestroy } from '@angular/core';
  import { HttpClient } from '@angular/common/http';

  import { Subscription } from 'rxjs/Subscription';

  export class Article {
    id: number;
    title: string;
    author: string;
  }

  @Component({
    selector: 'app-news',
    template: \`
            <h2>Improve, Improve, Improve ...</h2>
            <h1>({{ id }}) {{ title }}</h1>
            <p>{{ author }}</p>
    \`
  })
  export class NewsComponent implements OnInit, OnDestroy {
        id: number;
        title: string;
        author: string;

        newsSubscription: Subscription;

        constructor(private http: HttpClient) {}

        ngOnInit() {
        this.newsSubscription =
            this.http.get<Article>('assets/news.json').subscribe(response => {
            this.id = response.id;
            this.title = response.title;
            this.author = response.author;
          },
          error => console.log(error)
        );
        }

        ngOnDestroy() {
          this.newsSubscription.unsubscribe();
        }

   }

******************************************************
News.JSON

{
  "id": 1,
  "title": "The Will To Win Is Nothing Without The Will To Prepare",
  "author": "Nils-Holger Nägele"
}

  `
};
apip395 = {
  name: 'Subject Publish-Subscribe Model',
  code: `

  import { Component } from '@angular/core';
  import { Subject } from 'rxjs/Subject';


  @Component({
    selector: 'app-news',
    template: \`
            <button (click)="emitEvent($event)">Emit Event</button>

            <p *ngFor="let click of clicks; let i = index;">
              ({{ i }}): {{ click }}
            </p>
    \`
  })
  export class NewsComponent {
        clickEmitter = new Subject<Event>();
        clicks: Array<Event> = [];

        emitEvent(event) {
          this.clickEmitter.next(event);
        }

        constructor() {
          this.clickEmitter.subscribe(clickEvent => this.clicks.push(clickEvent));
        }

   }

  `
};
apip396 = {
  name: 'BehaviorSubject',
  code: `

  import { Component, Injectable } from '@angular/core';
  import { BehaviorSubject } from 'rxjs/BehaviorSubject';
  import { Observable } from 'rxjs/Observable';

  export const enum AuthenticationState {
              LoggedIn,
              LoggedOut
  }

  @Injectable()
  export class AuthenticationService {
    private authenticationManager = new BehaviorSubject(AuthenticationState.LoggedOut);
    private authenticationState: AuthenticationState;
    authenticationChanged: Observable<AuthenticationState>;

    constructor() {
      this.authenticationChanged = this.authenticationManager.asObservable();
    }

    login(): void {
      this.setAuthenticationState(AuthenticationState.LoggedIn);
    }

    logout(): void {
      this.setAuthenticationState(AuthenticationState.LoggedOut);
    }

    private emitAuthenticationState(): void {
      this.authenticationManager.next(this.authenticationState);
    }

    private setAuthenticationState(newAuthenticationState: AuthenticationState): void {
      this.authenticationState = newAuthenticationState;
      this.emitAuthenticationState();
    }

  }

  @Component({
    selector: 'app-news',
    template: \`
              <button *ngIf="!loggedIn" (click)="login()">Login</button>
              <button *ngIf="loggedIn" (click)="logout()">Logout</button>
    \`,
    providers: [AuthenticationService]
  })
  export class NewsComponent {
        loggedIn = false;

        constructor(private authenticationService: AuthenticationService) {
            this.authenticationService.authenticationChanged.subscribe(
              newAuthenticationState => {
                this.loggedIn = (newAuthenticationState === AuthenticationState.LoggedIn);
              }
            );
        }

        login(): void {
          this.authenticationService.login();
        }

        logout(): void {
          this.authenticationService.logout();
        }

   }

  `
};
apip397 = {
  name: 'Generalized Publish Subscribe Service',
  code: `

  import { Component, Injectable, Input, AfterViewInit, OnDestroy } from '@angular/core';

  import { Observable } from 'rxjs/Observable';
  import { Subject } from 'rxjs/Subject';
  import { Observer } from 'rxjs/Observer';
  import { Subscription } from 'rxjs/Subscription';
  import 'rxjs/add/operator/filter';
  import 'rxjs/add/operator/map';


  @Injectable()
  export class PublishSubscribeService {
         private publishSubscribeSubject = new Subject<any>();
         private emitter: Observable<any>;

         constructor() {
           this.emitter = this.publishSubscribeSubject.asObservable();
         }

         publish(channel: string, event: any): void {
           this.publishSubscribeSubject.next({
                channel: channel,
                event: event
           });
         }

         subscribe(channel: string, handler: ((value: any) => void)): Subscription {
           return this.emitter
                      .filter(emission => emission.channel === channel)
                      .map(emission => emission.event)
                      .subscribe(handler);
         }

  }

  @Component({
    selector: 'app-news',
    template: \`
              <p>Heard {{ count }} of {{ subscribeChannel }}</p>
              <button (click)="send()">Send {{ publishChannel }}</button>
    \`
  })
  export class NewsComponent implements AfterViewInit, OnDestroy {
        @Input() publishChannel: string;
        @Input() subscribeChannel: string;
        private pubSubServiceSubscription: Subscription;
        count = 0;

        constructor(private pubSubService: PublishSubscribeService) { }

        send() {
          this.pubSubService.publish(this.publishChannel, {});
        }

        ngAfterViewInit() {
          this.pubSubService.subscribe(this.subscribeChannel, event => ++this.count);
        }

        ngOnDestroy() {
          this.pubSubServiceSubscription.unsubscribe();
        }

   }

*****************************************************
   Root App Component

   <app-news subscribeChannel="hi" publishChannel="baby"></app-news>
   <app-news subscribeChannel="baby" publishChannel="hi"></app-news>

  `
};
apip398 = {
  name: 'Follow Changes In ViewChildren With QueryLists',
  code: `

    import { Component, ViewChildren, QueryList,
            Input, AfterViewInit, ChangeDetectorRef } from '@angular/core';


          @Component({
              selector: 'app-inner',
              template: \`
                        <p>{{ value }}</p>
                \`
              })
        export class InnerComponent {
        @Input() value: number;
        }


          @Component({
              selector: 'app-news',
              template: \`
                  <button (click)="add()">More</button>
                  <button (click)="remove()">Less</button>
                  <button (click)="shuffle()">Shuffle</button>
                  <app-inner *ngFor="let l of list" value="{{l}}"></app-inner>
                  <p>Value of last: {{ lastValue }}</p>
              \`
          })
        export class NewsComponent implements AfterViewInit {
        @ViewChildren(InnerComponent) innerComponents: QueryList<InnerComponent>;
        list: Array<number> = [];
        lastValue: number;

        constructor(private changeDetectorRef: ChangeDetectorRef) { }

        add(): void {
            this.list.push(this.list.length);
        }

        remove(): void {
            this.list.pop();
        }

        shuffle(): void {
            this.list = this.list.sort(() => (4 * Math.random() > 2) ? 1 : -1);
        }

        ngAfterViewInit() {
        this.innerComponents.changes.subscribe(innerComponents => {
         this.lastValue = (innerComponents.last || {}).value;
         this.changeDetectorRef.detectChanges();
      });
    }

  }

  `
};
apip399 = {
  name: 'AutoComplete',
  code: `

  import { Component, Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { FormControl } from '@angular/forms';

  import { Observable } from 'rxjs/Observable';

  import 'rxjs/add/operator/map';
  import 'rxjs/add/observable/of';
  import 'rxjs/add/operator/concatMap';
  import 'rxjs/add/operator/delay';
  import 'rxjs/add/operator/debounceTime';
  import 'rxjs/add/operator/distinctUntilChanged';
  import 'rxjs/add/operator/switchMap';


  export interface Response {
    prefix: string;
  }

  @Injectable()
  export class APIService {

          constructor(private http: HttpClient) { }

          search(query: string): Observable<string> {
            return this.http.get<Response>('assets/response.json')
                            .map(response => response.prefix + query)
                            .concatMap(
                              a => Observable.of(a).delay(Math.random() * 1000));
          }

  }


  @Component({
    selector: 'app-news',
    template: \`
              <input [formControl]="queryField">
                  <p *ngFor="let result of results">
                      {{ result }}
                  </p>
    \`,
    providers: [ APIService ]
  })
  export class NewsComponent  {
          results: string[] = [];
          queryField = new FormControl();

          constructor(private apiService: APIService) {
            this.queryField.valueChanges
                            .debounceTime(300)
                            .distinctUntilChanged()
                            .switchMap(query => this.apiService.search(query))
                            .subscribe(result => this.results.push(result));
          }

   }

********************************************************
Response.JSON

{
  "prefix": "You searched for "
}

  `
};
apip400 = {
  name: 'Application Setup Simple Route',
  code: `

  import { Component } from '@angular/core';

  @Component({
    selector: 'app-root',
    template: \`
              <h1>Root Component</h1>
              <router-outlet></router-outlet>
    \`
  })
  export class AppComponent { }

  /**************************************************************************** */

  @Component({
    selector: 'app-default',
    template: \`<h1>Hi Baby ...</h1>\`
  })
  export class DefaultComponent { }

  /**************************************************************************** */

  @Component({
    selector: 'app-news',
    template: \`<h1>What's New?</h1>\`
  })
  export class NewsComponent  { }


   /**************************************************************************** */

  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { RouterModule, Routes } from '@angular/router';

  const appRoutes: Routes = [
    { path: '**', component: DefaultComponent }
  ];

  @NgModule({
    declarations: [
      AppComponent,
      DefaultComponent,
      NewsComponent
    ],
    imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }

  `
};
apip401 = {
  name: 'Navigating With RouterLinks',
  code: `

  import { Component } from '@angular/core';

  @Component({
    selector: 'app-root',
    template: \`
              <h1>Root Component</h1>
              <a [routerLink]="['']">Default</a>
              <a [routerLink]="['news']">News</a>
              <router-outlet></router-outlet>
    \`
  })
  export class AppComponent { }

  /**************************************************************************** */

  @Component({
    selector: 'app-default',
    template: \`<h1>Hi Baby ...</h1>\`
  })
  export class DefaultComponent { }


   /**************************************************************************** */

  @Component({
    selector: 'app-news',
    template: \`<h1>What's New?</h1>\`
  })
  export class NewsComponent  { }


   /**************************************************************************** */

  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { RouterModule, Routes } from '@angular/router';

  const appRoutes: Routes = [
    { path: 'news', component: NewsComponent },
    { path: '**', component: DefaultComponent }
  ];

  @NgModule({
    declarations: [
      AppComponent,
      DefaultComponent,
      NewsComponent
    ],
    imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }


  `
};
apip402 = {
  name: 'Navigating With RouterService',
  code: `

  import { Component } from '@angular/core';
  import { Router } from '@angular/router';

  @Component({
    selector: 'app-root',
    template: \`
              <h1>Root Component</h1>
              <button (click)="visitDefault()">Default</button>
              <button (click)="visitNews()">News</button>
              <router-outlet></router-outlet>
    \`
  })
  export class AppComponent {

        constructor(private router: Router) { }

        visitDefault() {
          this.router.navigate(['']);
        }

        visitNews() {
          this.router.navigate(['news']);
        }

  }

  /**************************************************************************** */

  @Component({
    selector: 'app-default',
    template: \`<h1>Hi Baby ...</h1>\`
  })
  export class DefaultComponent { }


   /**************************************************************************** */

  @Component({
    selector: 'app-news',
    template: \`<h1>What's New?</h1>\`
  })
  export class NewsComponent  { }


   /**************************************************************************** */

  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { RouterModule, Routes } from '@angular/router';

  const appRoutes: Routes = [
    { path: 'news', component: NewsComponent },
    { path: '**', component: DefaultComponent }
  ];

  @NgModule({
    declarations: [
      AppComponent,
      DefaultComponent,
      NewsComponent
    ],
    imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }

  `
};
apip403 = {
  name: 'Path Construction With LocationStrategy',
  code: `

  import { Component } from '@angular/core';
  import { Router } from '@angular/router';

  @Component({
    selector: 'app-root',
    template: \`
              <h1>Root Component</h1>
              <button (click)="visitDefault()">Default</button>
              <button (click)="visitNews()">News</button>
              <router-outlet></router-outlet>
    \`
  })
  export class AppComponent {

        constructor(private router: Router) { }

        visitDefault() {
          this.router.navigate(['']);
        }

        visitNews() {
          this.router.navigate(['news']);
        }

  }

  /**************************************************************************** */

  @Component({
    selector: 'app-default',
    template: '<h1>Hi Baby ...</h1>'
  })
  export class DefaultComponent { }


   /**************************************************************************** */

  @Component({
    selector: 'app-news',
    template: '<h1>What\'s New?</h1>'
  })
  export class NewsComponent  { }


   /**************************************************************************** */

  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { RouterModule, Routes } from '@angular/router';
  import { LocationStrategy, HashLocationStrategy } from '@angular/common';

  const appRoutes: Routes = [
    { path: 'news', component: NewsComponent },
    { path: '**', component: DefaultComponent }
  ];

  @NgModule({
    declarations: [
      AppComponent,
      DefaultComponent,
      NewsComponent
    ],
    imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes)
    ],
    providers: [
      { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }

  `
};
apip404 = {
  name: 'RouterLinkActive Build Stateful Route Behavior',
  code: `

  import { Component } from '@angular/core';
  import { Router } from '@angular/router';

  @Component({
    selector: 'app-root',
    template: \`
              <h1>Root Component</h1>
              <a [routerLink]="['']"
                 [routerLinkActive]="'active-navlink'"
                 [routerLinkActiveOptions]="{exact: true}">
                 Default
              </a>
              <a [routerLink]="['news']"
                 [routerLinkActive]="'active-navlink'"
                 [routerLinkActiveOptions]="{exact: true}">
                 News
              </a>
              <router-outlet></router-outlet>
    \`,
    styles: [\`
        .active-navlink {
          color: red;
          text-transform: uppercase;
        }
    \`]
  })
  export class AppComponent {

        constructor(private router: Router) { }

        visitDefault() {
          this.router.navigate(['']);
        }

        visitNews() {
          this.router.navigate(['news']);
        }

  }

  /**************************************************************************** */

  @Component({
    selector: 'app-default',
    template: '<h1>Hi Baby ...</h1>'
  })
  export class DefaultComponent { }


   /**************************************************************************** */

  @Component({
    selector: 'app-news',
    template: '<h1>What\'s New?</h1>'
  })
  export class NewsComponent  { }


   /**************************************************************************** */

  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { RouterModule, Routes } from '@angular/router';
  import { LocationStrategy, HashLocationStrategy } from '@angular/common';

  const appRoutes: Routes = [
    { path: 'news', component: NewsComponent },
    { path: '**', component: DefaultComponent }
  ];

  @NgModule({
    declarations: [
      AppComponent,
      DefaultComponent,
      NewsComponent
    ],
    imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes)
    ],
    providers: [
      { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }

  `
};
apip405 = {
  name: 'Nested Views With Route Parameters && Child Routes',
  code: `

  import { Component } from '@angular/core';
  import { Router, ActivatedRoute } from '@angular/router';

  @Component({
    selector: 'app-root',
    template: \`
              <h1>Root Component</h1>
              <a [routerLink]="['']"
                 [routerLinkActive]="'active-navlink'"
                 [routerLinkActiveOptions]="{exact: true}">
                 Default
              </a>
              <a [routerLink]="['news']"
                 [routerLinkActive]="'active-navlink'"
                 [routerLinkActiveOptions]="{exact: true}">
                 News
              </a>
              <router-outlet></router-outlet>
    \`,
    styles: [\`
        .active-navlink {
          color: red;
          text-transform: uppercase;
        }
    \`]
  })
  export class AppComponent {

        constructor(private router: Router) { }

        visitDefault() {
          this.router.navigate(['']);
        }

        visitNews() {
          this.router.navigate(['news']);
        }

  }

  /**************************************************************************** */

  @Component({
    selector: 'app-default',
    template: '<h1>Hi Baby ...</h1>'
  })
  export class DefaultComponent { }


   /**************************************************************************** */

  @Component({
    selector: 'app-news',
    template: \`
            <h2>News Component!</h2>
            <router-outlet></router-outlet>
    \`
  })
  export class NewsComponent  { }


   /**************************************************************************** */

   @Component({
    selector: 'app-news-list',
    template: \`
            <h3>News List</h3>
            <p *ngFor="let newsId of newsIds">
                <a [routerLink]="newsId">
                    News ({{ newsId }})
                </a>
            </p>
    \`
  })
  export class NewsListComponent  {
        newsIds: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

  }

   /**************************************************************************** */

   @Component({
    selector: 'app-news-detail',
    template: \`
              <h1>News Detail</h1>
              <p>Showing News {{ newsId }}</p>
              <a [routerLink]="'../'">Back Up</a>
    \`
  })
  export class NewsDetailComponent  {
                newsId: number;

                constructor(private activatedRoute: ActivatedRoute) {
                    this.activatedRoute.params
                        .subscribe(params => this.newsId = params['newsId']);
                }

  }


   /**************************************************************************** */

  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { RouterModule, Routes } from '@angular/router';

  const appRoutes: Routes = [
    { path: 'news', component: NewsComponent,
      children: [
        { path: '', component: NewsListComponent },
        { path: ':newsId', component: NewsDetailComponent }
      ]
  },
    { path: '**', component: DefaultComponent }
  ];

  @NgModule({
    declarations: [
      AppComponent,
      DefaultComponent,
      NewsComponent,
      NewsListComponent,
      NewsDetailComponent
    ],
    imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }

  `
};
apip406 = {
  name: 'Routing Arrays && Matrix URL Parameters',
  code: `

  import { Component } from '@angular/core';
  import { Router, ActivatedRoute } from '@angular/router';

  @Component({
    selector: 'app-root',
    template: \`
              <h1>Root Component</h1>
              <a [routerLink]="['']">
                 Default
              </a>
              <a [routerLink]="['news', {listData: 'foo bar baz'}]">
                 News
              </a>
              <router-outlet></router-outlet>
    \`
  })
  export class AppComponent { }

  /**************************************************************************** */

  @Component({
    selector: 'app-default',
    template: '<h1>Hi Baby ...</h1>'
  })
  export class DefaultComponent { }


   /**************************************************************************** */

  @Component({
    selector: 'app-news',
    template: \`
            <h2>News Component!</h2>
            <router-outlet></router-outlet>
    \`
  })
  export class NewsComponent  { }


   /**************************************************************************** */

   @Component({
    selector: 'app-news-list',
    template: \`
            <h3>News List</h3>
            <p *ngFor="let newsId of newsIds">
                <a [routerLink]="[newsId, { detailData: 'oof rab zab'}]">
                    News ({{ newsId }})
                </a>
            </p>
    \`
  })
  export class NewsListComponent  {
        newsIds: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

        constructor(private activatedRoute: ActivatedRoute) {
                    this.activatedRoute.params.subscribe(params => {
                        console.log('List params:');
                        console.log(window.location.href);
                        console.log(params);
                    });
        }

  }

   /**************************************************************************** */

   @Component({
    selector: 'app-news-detail',
    template: \`
              <h1>News Detail</h1>
              <p>Showing News {{ newsId }}</p>
              <a [routerLink]="'../'">Back Up</a>
    \`
  })
  export class NewsDetailComponent  {
                newsId: number;

                constructor(private activatedRoute: ActivatedRoute) {
                    this.activatedRoute.params
                        .subscribe(params => {
                          console.log('Detail params:');
                          console.log(window.location.href);
                          console.log(params);
                          this.newsId = params['newsId'];
                    });
                }

  }


   /**************************************************************************** */

  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { RouterModule, Routes } from '@angular/router';

  const appRoutes: Routes = [
    { path: 'news', component: NewsComponent,
      children: [
        { path: '', component: NewsListComponent },
        { path: ':newsId', component: NewsDetailComponent }
      ]
  },
    { path: '**', component: DefaultComponent }
  ];

  @NgModule({
    declarations: [
      AppComponent,
      DefaultComponent,
      NewsComponent,
      NewsListComponent,
      NewsDetailComponent
    ],
    imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }

  `
};
apip407 = {
  name: 'Route Authentication Controls With Route Guards',
  code: `

  import { Component, Injectable, OnDestroy } from '@angular/core';
  import { Router, ActivatedRoute, CanActivate } from '@angular/router';

  import { Observable } from 'rxjs/Observable';
  import { Subscription } from 'rxjs/Subscription';
  import { BehaviorSubject } from 'rxjs/BehaviorSubject';
  import 'rxjs/add/operator/map';
  import 'rxjs/add/operator/take';

  @Injectable()
  export class AuthenticationService {
        private authenticationSubject = new BehaviorSubject(null);
        userNameEmitter: Observable<string>;

        private setAuthenticationState(userName: string): void {
          this.authenticationSubject.next(userName);
        }

        constructor() {
          this.userNameEmitter = this.authenticationSubject.asObservable();
          this.logOut();
        }

        logIn(userName: string): void {
          this.setAuthenticationState(userName);
        }

        logOut(): void {
          this.setAuthenticationState(null);
        }

  }

  /**************************************************************************** */

  @Injectable()
  export class AuthGuard implements CanActivate {

        constructor(private router: Router,
                    private authenticationService: AuthenticationService) { }

        canActivate(): Observable<boolean> {
          return this.authenticationService.userNameEmitter.map((userName) => {
                    if (!userName) {
                      this.router.navigate(['login']);
                    } else {
                      return true;
                    }
          }).take(1);
        }
  }

  /**************************************************************************** */

  @Injectable()
  export class LogOutGuard implements CanActivate {

        constructor(private router: Router,
                    private authenticationService: AuthenticationService) { }

        canActivate(): boolean {
          this.authenticationService.logOut();
          this.router.navigate(['']);
          return true;
        }
  }



  @Component({
    selector: 'app-root',
    template: \`
              <h3 *ngIf="!!(userName | async)">
                  Hi, {{ userName | async }}.
              </h3>
              <a routerLink="">Default</a>
              <a routerLink="profile">Profile</a>

              <a *ngIf="!(userName | async)" routerLink="login">LogIn</a>
              <a *ngIf="!!(userName | async)" routerLink="logout">LogOut</a>

              <router-outlet></router-outlet>
    \`
  })
  export class AppComponent {
            userName: Observable<string>;

            constructor(private authenticationService: AuthenticationService) {
              this.userName = this.authenticationService.userNameEmitter;
            }
  }

  /**************************************************************************** */

  @Component({
    selector: 'app-default',
    template: '<h1>Hi Baby ...</h1>'
  })
  export class DefaultComponent { }


   /**************************************************************************** */

  @Component({
    selector: 'app-login',
    template: \`
            <h2>LogIn View</h2>
            <input #box>
            <button (click)="logIn(box.value)">LogIn</button>
    \`
  })
  export class LogInComponent implements OnDestroy  {
        private userNameSubscription: Subscription;

        constructor(private router: Router,
                    private authenticationService: AuthenticationService) { }

        logIn(newUserName: string): void {
          this.authenticationService.logIn(newUserName);
          this.userNameSubscription = this.authenticationService.
                                      userNameEmitter.subscribe(userName => {
                                        if (!!userName) {
                                          this.router.navigate(['']);
                                        }
                                      });
        }

        ngOnDestroy() {
          this.userNameSubscription &&
          this.userNameSubscription.unsubscribe();
        }

  }


   /**************************************************************************** */

   @Component({
    selector: 'app-logout',
    template: \` \`
  })
  export class LogOutComponent  { }

   /**************************************************************************** */

   @Component({
    selector: 'app-profile',
    template: \`
              <h1>Profile View</h1>
              UserName: <input #box value="{{ userName | async }}">
              <button (click)="upDate(box.value)">Update</button>
    \`
  })
  export class ProfileComponent  {
                userName: Observable<string>;

                constructor(private authenticationService: AuthenticationService) {
                    this.userName = this.authenticationService.userNameEmitter;
                }

                upDate(userName: string): void {
                  this.authenticationService.logIn(userName);
                }

  }


   /**************************************************************************** */

  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { RouterModule, Routes } from '@angular/router';


  const appRoutes: Routes = [
    { path: 'login', component: LogInComponent },
    { path: 'logout', component: LogOutComponent, canActivate: [LogOutGuard] },
    { path: 'profile', component: ProfileComponent, canActivate: [ AuthGuard] },
    { path: '**', component: DefaultComponent }
  ];

  @NgModule({
    declarations: [
      AppComponent,
      DefaultComponent,
      LogInComponent,
      LogOutComponent,
      ProfileComponent
    ],
    imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes)
    ],
    providers: [AuthenticationService, AuthGuard, LogOutGuard],
    bootstrap: [AppComponent]
  })
  export class AppModule { }

  `
};
apip408 = {
  name: 'Inject Simple Service In Component',
  code: `

  import { Component, Injectable } from '@angular/core';


  @Injectable()
  export class NewsService {
          private title = \`The Object Of The War Is The Domination And Organization
                           Of The Continent Known as Europe.\`;

         getTitle() {
           return this.title;
         }

  }

  /**************************************************************************** */


  @Component({
    selector: 'app-news',
    template: \`
          <h1>News Component</h1>
          <button (click)="getArticle()">Show Article</button>
          <h2>{{ title }}</h2>
    \`,
    providers: [ NewsService ]
  })
  export class NewsComponent {
      title: string;

      constructor(private newsService: NewsService) { }

      getArticle(): void {
        this.title = this.newsService.getTitle();
      }

  }


  `
};
apip409 = {
  name: 'Service Instance Creation And Injection With NgModule',
  code: `

  import { NgModule, Component, Injectable } from '@angular/core';


  @Injectable()
  export class NewsService {
          private title = \`The Object Of The War Is The Domination And Organization
                           Of The Continent Known as Europe.\`;

         getTitle() {
           return this.title;
         }

  }

  /**************************************************************************** */


  @Component({
    selector: 'app-news',
    template: \`
          <h1>News Component</h1>
          <h2>{{ title }}</h2>
    \`,
    providers: [ NewsService ]
  })
  export class NewsComponent {
      title: string;

      constructor(private newsService: NewsService) {
        this.title = this.newsService.getTitle();
      }

  }

  /**************************************************************************** */


  @NgModule({
    declarations: [ NewsComponent ],
    providers: [ NewsService ],
    bootstrap: [ NewsComponent ],
    exports: [ NewsComponent ]
  })
  export class NewsModule { }

  /**************************************************************************** */

  Root App Component
  <app-news></app-news>
  <app-news></app-news>
  <app-news></app-news>

  `
};
apip410 = {
  name: 'Service Injection Aliasing With UseClass && UseExisting',
  code: `

  import { Component, Injectable } from '@angular/core';

  export interface NewsSourceInterface {
    getNews(): News;
  }

  export interface News {
    title: string;
    body: string;
    notes?: string;
  }


  @Injectable()
  export class NewsService implements NewsSourceInterface {
          private title = \`The Will To Win Is Nothing Without The Will To Prepare.\`;
          private body = 'I have met my hero, he is me.';

         getNews() {
           return  {
             title: this.title,
             body: this.body
           };
         }

  }

  /**************************************************************************** */

  @Injectable()
  export class EditorNewsService extends NewsService implements NewsSourceInterface {
          private notes = 'WORK HARD | BE KIND | DO MORE ... Code With Passion.';

         constructor() {
           super();
         }

         getNews(): News {
           console.log(super.getNews());
           return Object.assign({}, super.getNews(), { notes: this.notes});
         }

  }

  /**************************************************************************** */

  @Component({
    selector: 'app-default-view',
    template: \`
          <h3>Default View</h3>
          <ng-content></ng-content>
    \`,
    providers: [ NewsService ]
  })
  export class DefaultViewComponent { }


  /**************************************************************************** */

  @Component({
    selector: 'app-editor-view',
    template: \`
          <h3>Editor View</h3>
          <ng-content></ng-content>
    \`,
    providers: [
      { provide: NewsService, useClass: EditorNewsService }
     ]
  })
  export class EditorViewComponent { }


  /**************************************************************************** */

  @Component({
    selector: 'app-news',
    template: \`
          <h1>News Component</h1>
          <h2> {{ news.title }}</h2>
          <p>{{ news.body }}</p>
          <p *ngIf="news.notes">
            <i>Notes: {{ news.notes }}</i>
          </p>
    \`
  })
  export class NewsComponent {
      news: News;

      constructor(private newsService: NewsService) {
        this.news = this.newsService.getNews();
      }

  }

  /**************************************************************************** */

  Root App Component

    <app-default-view>
        <app-news></app-news>
    </app-default-view>
    <hr>
    <app-editor-view>
      <app-news></app-news>
    </app-editor-view>

  `
};
apip411 = {
  name: 'Unit Test With Karma, Jasmine && Angular Core Testing',
  code: `

  import { Component } from '@angular/core';

  @Component({
    selector: 'app-news',
    template: \`
          <h1>We are DRIVEN. Use Your Superpowers To Do Good.</h1>
            <h3>{{ title }}</h3>
    \`
  })
  export class NewsComponent {
        title = \`Never stop thinking about tomorrow.\`;

  }

  /**************************************************************************** */

  import { async, ComponentFixture, TestBed } from '@angular/core/testing';

  import { NewsComponent } from './news.component';

  describe('NewsComponent', () => {
    let component: NewsComponent;
    let fixture: ComponentFixture<NewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct title', () => {
    expect(component.title).toBe(\`Never stop thinking about tomorrow.\`);
  });

  it('should render title in an h3 tag', async(() => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('h3').textContent)
          .toContain(component.title);

  }));

});


  `
};
apip412 = {
  name: 'Simple E2E Test With Protractor',
  code: `

  import { browser, by, element } from 'protractor';

  export class AppPage {
    navigateTo() {
      return browser.get('/');
    }

    getHeaderText() {
      return element(by.css('app-root h1')).getText();
    }
  }

  /**************************************************************************** */

  import { AppPage } from './app.po';

  describe('ng5-apis App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have correct h1 text', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toEqual('Use Your Superpowers To Do Good.');
  });
});

  `
};
apip413 = {
  name: 'Unit Test Synchronous Service',
  code: `

  import { Injectable } from '@angular/core';

  @Injectable()
  export class MagicQuoteService {
    private values: string[];
    private lastIndex: number;

    constructor() {
      this.values = [
        'Never stop thinking about tomorrow',
        'Use your superpowers to do good',
        'Work hard, be kind, do more ...',
        'Improve, improve, improve'
      ];
      this.lastIndex = this.getIndex();
     }

     private getIndex(): number {
       return Math.floor(Math.random() * this.values.length);
     }

     reveal(): string {
       let newIdx = this.getIndex();
       if (newIdx === this.lastIndex) {
         newIdx = (++newIdx) % this.values.length;
       }
       this.lastIndex = newIdx;
       return this.values[newIdx];
     }

  }

  /**************************************************************************** */

  import { TestBed, inject } from '@angular/core/testing';

  import { MagicQuoteService } from './magic-quote.service';

  describe('MagicQuoteService', () => {
      beforeEach(() => {
        TestBed.configureTestingModule({
        providers: [MagicQuoteService]
    });
  });

  it('should be created', inject([MagicQuoteService],
    (magicQuoteService: MagicQuoteService) => {
    expect(magicQuoteService).toBeTruthy();
  }));

  it('should return a string with nonzero length', inject([MagicQuoteService],
    (magicQuoteService: MagicQuoteService) => {
        const result = magicQuoteService.reveal();
        expect(result).toEqual(jasmine.any(String));
        expect(result.length).toBeGreaterThan(0);
    }));

    it('should not return the same value twice in a row', inject([MagicQuoteService],
      (magicQuoteService: MagicQuoteService) => {
          let last;
          for (let i = 0; i < 100; ++i) {
            const next = magicQuoteService.reveal();
            expect(next).not.toEqual(last);
            last = next;
          }
      }));

});

  `
};
apip414 = {
  name: 'Unit Test Component With Stub',
  code: `

  import { Component } from '@angular/core';

  import { MagicQuoteService } from '../magic-quote.service';

  @Component({
    selector: 'app-magic-quote',
    template: \`
                <button (click)="update()">Click me!</button>
                <h1>{{ result }}</h1>
    \`
  })
  export class MagicQuoteComponent {
        result = '';

        constructor(private magicQuoteService: MagicQuoteService) { }

        update() {
          this.result = this.magicQuoteService.reveal();
        }

  }

  /**************************************************************************** */

  import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MagicQuoteComponent } from './magic-quote.component';
import { MagicQuoteService } from './../magic-quote.service';

describe('MagicQuoteComponent', () => {
  let component: MagicQuoteComponent;
  let fixture: ComponentFixture<MagicQuoteComponent>;

  const getHeaderElement = () => fixture.nativeElement.querySelector('h1');
  const magicQuoteResponse = 'Answer unclear';
  const magicQuoteServiceStub = {
    reveal: () => magicQuoteResponse
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagicQuoteComponent ],
      providers: [
        {
          provide: MagicQuoteService,
          useValue: magicQuoteServiceStub
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should begin with no text', () => {
        fixture.detectChanges();
        expect(getHeaderElement().textContent).toEqual('');
  });

  it('should show text after click', async(() => {
        fixture.debugElement.query(By.css('button'))
        .triggerEventHandler('click', null);
        fixture.detectChanges();
        expect(getHeaderElement().textContent).toEqual(magicQuoteResponse);
  }));
});

  `
};
apip415 = {
  name: 'Unit Test Component With Spies',
  code: `

  import { async, ComponentFixture, TestBed } from '@angular/core/testing';
  import { By } from '@angular/platform-browser';

  import { MagicQuoteComponent } from './magic-quote.component';
  import { MagicQuoteService } from './../magic-quote.service';

  describe('MagicQuoteComponent', () => {
    let component: MagicQuoteComponent;
    let fixture: ComponentFixture<MagicQuoteComponent>;

    const getHeaderElement = () => fixture.nativeElement.querySelector('h1');
    const magicQuoteResponse = 'Answer unclear';
    let magicQuoteService;
    let revealSpy;

    const clickButton = () => {
      fixture.debugElement.query(By.css('button')).triggerEventHandler('click', null);
    };

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ MagicQuoteComponent ],
        providers: [ MagicQuoteService ]
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(MagicQuoteComponent);
      magicQuoteService = fixture.debugElement.injector.get(MagicQuoteService);
      revealSpy = spyOn(magicQuoteService, 'reveal').and.returnValue(magicQuoteResponse);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should begin with no text', () => {
          fixture.detectChanges();
          expect(getHeaderElement().textContent).toEqual('');
    });

    it('should call reveal after a click', () => {
      clickButton();
      expect(revealSpy.calls.count()).toBe(1);
      expect(revealSpy.calls.mostRecent().returnValue).toBe(magicQuoteResponse);
  });

    it('should show text after click', async(() => {
          fixture.debugElement.query(By.css('button'))
          .triggerEventHandler('click', null);
          fixture.detectChanges();
          expect(getHeaderElement().textContent).toEqual(magicQuoteResponse);
    }));
  });


  `
};
apip416 = {
  name: 'Impure Pipe () => Give Me One More Pipe;',
  code: `

  import { Pipe, PipeTransform } from '@angular/core';

  @Pipe({
    name: 'addRandom',
    pure: false
  })
  export class AddRandomPipe implements PipeTransform {

    transform(value: string): string {
      return value + Math.random();
    }

  }

  /**************************************************************************** */

  import { Component, ChangeDetectionStrategy } from '@angular/core';

  @Component({
  selector: 'app-news',
  template: \`
        <h1>Never stop thinking about tomorrow.</h1>
          <input #box>
          <button (click)="update(box.value)">Update</button>
          <h1>{{ title | addRandom }}</h1>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class NewsComponent {
      title = '';

      update(newTitle: string): void {
        this.title = newTitle;
      }

  }

  `
};
apip417 = {
  name: 'Listen For NgZone Events',
  code: `

  import { Component, NgZone } from '@angular/core';

  @Component({
    selector: 'app-root',
    template: \`
            <button (click)="foo()">Foo</button>
    \`
  })
  export class AppComponent {

      constructor(private zone: NgZone) {
        zone.onStable.subscribe(() => console.log('stable'));
        zone.onUnstable.subscribe(() => console.log('unstable'));
      }

      foo() {
        setTimeout(() => console.log('timeout handler'), 1000);
      }

  }

  `
};
apip418 = {
  name: 'Execution Inside && Outside Angular Zone',
  code: `

  import { Component, NgZone } from '@angular/core';

  @Component({
    selector: 'app-root',
    template: \`
            <h3>Progress: {{ progress }}%</h3>
            <button (click)="runInsideAngularZone()">
                Run inside Angular Zone
            </button>
            <button (click)="runOutsideAngularZone()">
              Run outside Angular Zone
            </button>
    \`
  })
  export class AppComponent {
    progress = 0;
    startTime = 0;

    constructor(private zone: NgZone) { }

    runInsideAngularZone() {
      this.start();
      this.step(() => this.finish('Inside Angular Zone'));
    }

    runOutsideAngularZone() {
      this.start();
      this.zone.runOutsideAngular(() => {
        this.step(() => this.finish('Outside Angular Zone'));
      });
    }

    start() {
      this.progress = 0;
      this.startTime = performance.now();
    }

    finish(location: string) {
      this.zone.run(() => {
          console.log(location);
          console.log(\`Took \${performance.now() - this.startTime} ms\`);
      });
    }

    step(doneCallback: () => void) {
      if (++this.progress < 100) {
        setTimeout(() => {
          this.step(doneCallback);
        }, 10);
      } else {
        doneCallback();
      }
    }

  }

  `
};
apip419 = {
  name: 'Explicit Change Detection With OnPush',
  code: `

  import { Component, Input, ChangeDetectionStrategy,
           ChangeDetectorRef, OnInit } from '@angular/core';

  import { Observable } from 'rxjs/Observable';

  @Component({
    selector: 'app-news',
    template: \`
          <h1>{{ title }}</h1>
           <p>Likes {{ count }}</p>
    \`,
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class NewsComponent implements OnInit {
        @Input() likes: Observable<Event>;
        title = 'Never stop thinking about tomorrow.';
        count = 0;

        constructor(private changeDetectorRef: ChangeDetectorRef) { }

        ngOnInit() {
          this.likes.subscribe((evt: Event) => {
              ++this.count;
              this.changeDetectorRef.markForCheck();
          });
        }

  }

  /**************************************************************************** */

  import { Component } from '@angular/core';

  import { Observable } from 'rxjs/Observable';
  import { Subject } from 'rxjs/Subject';

  @Component({
    selector: 'app-root',
    template: \`
          <button (click)="likeSubject.next($event)">Like!</button>
          <app-news [likes]="likeEmitter"></app-news>
  \`
  })
    export class AppComponent {

        likeSubject = new Subject<Event>();
        likeEmitter = this.likeSubject.asObservable();

  }

  `
};
apip420 = {
  name: 'ViewEncapsulation For Maximum Efficiency',
  code: `

  import { Component, ViewEncapsulation} from '@angular/core';


  @Component({
    selector: 'app-news',
    template: \`
          <h1>{{ title }}</h1>
    \`,
    encapsulation: ViewEncapsulation.Emulated,
    styles: [\`
      h1 {
        color: red;
      }
    \`]
  })
  export class NewsComponent {
        title = 'Never stop thinking about tomorrow ...';

  }

  `
};
apip421 = {
  name: 'Performance Matters: Lazy Loading',
  code: `

  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { Routes, RouterModule } from '@angular/router';

  import { AppComponent } from './app.component';
  import { LinkComponent } from './link/link.component';

  const appRoutes: Routes = [
        {
          path: 'news',
          loadChildren: 'app/news/news.module#NewsModule'
        },
        {
          path: '**',
          component: LinkComponent
        }
  ];

  @NgModule({
    declarations: [
      AppComponent,
      LinkComponent
    ],
    imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }

  /**************************************************************************** */

  import { Component } from '@angular/core';

  @Component({
    selector: 'app-root',
    template: \`
          <h1>Root Component</h1>
          <router-outlet></router-outlet>
    \`
  })
  export class AppComponent { }

  /**************************************************************************** */

  import { Component } from '@angular/core';

  @Component({
    selector: 'app-link',
    template: \`
          <a routerLink="/news">News</a>
    \`
  })
  export class LinkComponent { }

  /**************************************************************************** */

  import { Component } from '@angular/core';

  @Component({
    selector: 'app-news',
    template: \`
            <h1>{{ title }}</h1>
    \`
  })
  export class NewsComponent {
      title = \`Never stop thinking about tommorrow.
                Use your Superpowers to do good.\`;

  }

  /**************************************************************************** */

  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { Routes, RouterModule } from '@angular/router';

  import { NewsComponent } from './news.component';

  const newsRoutes: Routes = [
      { path: '', component: NewsComponent }
  ];

  @NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(newsRoutes)
    ],
    declarations: [ NewsComponent ],
    exports: [ NewsComponent ]
  })
  export class NewsModule { }

  `
};
apip422 = {
  name: 'Angular Redux State Management: Package JSON',
  code: `

  {
    "name": "ng5-redux",
    "version": "0.0.0",
    "license": "MIT",
    "scripts": {
      "ng": "ng",
      "start": "ng serve",
      "build": "ng build",
      "test": "ng test",
      "lint": "ng lint",
      "e2e": "ng e2e"
    },
    "private": true,
    "dependencies": {
      "@angular-redux/store": "^7.1.0",
      "@angular/animations": "^5.2.6",
      "@angular/common": "^5.2.6",
      "@angular/compiler": "^5.2.6",
      "@angular/core": "^5.2.6",
      "@angular/forms": "^5.2.6",
      "@angular/http": "^5.2.6",
      "@angular/platform-browser": "^5.2.6",
      "@angular/platform-browser-dynamic": "^5.2.6",
      "@angular/platform-server": "^5.2.6",
      "@angular/router": "^5.2.6",
      "core-js": "^2.4.1",
      "redux": "^3.7.2",
      "rxjs": "^5.5.6",
      "zone.js": "^0.8.14"
    },
    "devDependencies": {
      "@angular/cli": "^1.7.1",
      "@angular/compiler-cli": "^5.2.6",
      "@angular/language-service": "^4.2.4",
      "@types/jasmine": "~2.5.53",
      "@types/jasminewd2": "~2.0.2",
      "@types/node": "~6.0.60",
      "codelyzer": "~3.1.1",
      "jasmine-core": "~2.6.2",
      "jasmine-spec-reporter": "~4.1.0",
      "karma": "~1.7.0",
      "karma-chrome-launcher": "~2.1.1",
      "karma-cli": "~1.0.1",
      "karma-coverage-istanbul-reporter": "^1.2.1",
      "karma-jasmine": "~1.1.0",
      "karma-jasmine-html-reporter": "^0.2.2",
      "protractor": "~5.1.2",
      "ts-node": "~3.2.0",
      "tslint": "~5.3.2",
      "typescript": "^2.6.2"
    }
  }


  `
};
apip423 = {
  name: 'Counter App: App Module',
  code: `

  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { FormsModule } from '@angular/forms';

  import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
  import { rootReducer, IAppState, INITIAL_STATE } from './store';
  import { CounterActions } from './actions';

  import { AppComponent } from './app.component';

  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      NgReduxModule
    ],
    providers: [ CounterActions ],
    bootstrap: [ AppComponent ]
  })
  export class AppModule {

    constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {
      const storeEnhancers = devTools.isEnabled() ? [ devTools.enhancer() ] : [];
      ngRedux.configureStore(rootReducer, INITIAL_STATE, [], storeEnhancers);
    }

  }


  `
};
apip424 = {
  name: 'Actions',
  code: `

  import { Injectable } from '@angular/core';

  import { Action } from 'redux';

  @Injectable()
  export class CounterActions {
    static INCREMENT = 'INCREMENT';
    static DECREMENT = 'DECREMENT';

    increment(): Action {
      return { type: CounterActions.INCREMENT };
    }

    decrement(): Action {
      return { type: CounterActions.DECREMENT };
    }

  }

  `
};
apip425 = {
  name: 'Store',
  code: `

  import { Action } from 'redux';
  import { CounterActions } from './actions';

  export interface IAppState {
    count: number;
  }

  export const INITIAL_STATE: IAppState = {
    count: 0
  };


  export function rootReducer(lastState: IAppState, action: Action): IAppState {
        switch (action.type) {
          case CounterActions.INCREMENT: return { count: lastState.count + 1 };
          case CounterActions.DECREMENT: return { count: lastState.count - 1 };
        }

        return lastState;
  }

  `
};
apip426 = {
  name: 'App Component',
  code: `

  import { Component } from '@angular/core';

  import { NgRedux, select } from '@angular-redux/store';
  import { CounterActions } from './actions';
  import { IAppState } from './store';

  import { Observable } from 'rxjs/Observable';


  @Component({
    selector: 'app-root',
    template: \`
          <div>
                Count: {{ count$ | async }}
                <button (click)="increment()">++</button>
                <button (click)="decrement()">--</button>
          </div>
    \`
  })
  export class AppComponent {
          @select() readonly count$: Observable<number>;

          constructor(private ngRedux: NgRedux<IAppState>,
                      private actions: CounterActions) { }

          increment() {
            this.ngRedux.dispatch(this.actions.increment());
          }

          decrement() {
            this.ngRedux.dispatch(this.actions.decrement());
          }

  }

  `
};
apip427 = {
  name: 'Index HTML',
  code: `

  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <title>ng5-redux</title>
    <base href="/">

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <link rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
    crossorigin="anonymous">
  </head>
  <body>
  <app-root>launch my baby ...</app-root>
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
  integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
  crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
  integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
  crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
  integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
  crossorigin="anonymous"></script>
  </body>
  </html>

  `
};
apip429 = {
  name: 'Unit Test Selectors',
  code: `

  import { TestBed } from '@angular/core/testing';

  import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/testing';
  import { Subject } from 'rxjs/Subject';
  import 'rxjs/add/operator/toArray';

  import { AppComponent } from './app.component';
  import { IAppState } from './store';
  import { CounterActions } from './actions';

  describe('AppComponent', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [ AppComponent],
        imports: [ NgReduxTestingModule ],
        providers: [ CounterActions ]
      }).compileComponents();

      MockNgRedux.reset();
    });

    it('should select the current values from Redux', done => {
      const fixture = TestBed.createComponent(AppComponent);
      const componentUnderTest = fixture.debugElement.componentInstance;

      const countStub: Subject<number> =
                       MockNgRedux.getSelectorStub<IAppState, number>('count');

      const expectedValues = [2, 4, 8, 16, 8, 16, 8, 4, 2];

      expectedValues.forEach(value => countStub.next(value));

      countStub.complete();

      componentUnderTest.count$.toArray().subscribe(
                actualValues => expect(actualValues).toEqual(expectedValues), null, done
      );
    });

  });

  `
};
apip428 = {
  name: 'Todo App: App Module',
  code: `

  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { FormsModule } from '@angular/forms';

  import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
  import { rootReducer, IAppState, INITIAL_STATE } from './store';

  import { AppComponent } from './app.component';
  import { TodoOverviewComponent } from './todo-overview/todo-overview.component';
  import { TodoListComponent } from './todo-list/todo-list.component';

  @NgModule({
    declarations: [
      AppComponent,
      TodoOverviewComponent,
      TodoListComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      NgReduxModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
  })
  export class AppModule {

    constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {
      const storeEnhancers = devTools.isEnabled() ? [ devTools.enhancer() ] : [];
      ngRedux.configureStore(rootReducer, INITIAL_STATE, [], storeEnhancers);
    }

  }

  `
};
apip430 = {
  name: 'App Component',
  code: `

  import { Component } from '@angular/core';


  @Component({
    selector: 'app-root',
    template: \`
          <div class="container">
            <div>
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">What needs to be done?</h3>
                        <h6 class="card-subtitle mb-2 text-muted">Angular & Redux</h6>
                        <app-todo-overview></app-todo-overview>
                        <app-todo-list></app-todo-list>
                    </div>
                </div>
            </div>
          </div>
    \`
  })
  export class AppComponent { }


  `
};
apip431 = {
  name: 'Todo Class',
  code: `

    export class Todo {
      id: number;
      description: string;
      responsible: string;
      priority: string;
      isCompleted: boolean;
  }

  `
};
apip432 = {
  name: 'Todo Actions',
  code: `

  export const ADD_TODO = 'ADD_TODO';
  export const TOGGLE_TODO = 'TOGGLE_TODO';
  export const REMOVE_TODO = 'REMOVE_TODO';
  export const REMOVE_ALL_TODOS = 'REMOVE_ALL_TODOS';

  `
};
apip433 = {
  name: 'Todo Store',
  code: `

  import { Todo } from './todo';
  import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, REMOVE_ALL_TODOS } from './actions';

  export interface IAppState {
    todos: Todo[];
    lastUpdate: Date;
  }

  export const INITIAL_STATE: IAppState = {
    todos: [],
    lastUpdate: null
  };


  export function rootReducer(state: IAppState, action): IAppState {
        switch (action.type) {
          case ADD_TODO:
          action.todo.id = state.todos.length + 1;
          return Object.assign({}, state, {
                 todos: state.todos.concat(Object.assign({}, action.todo)),
                 lastUpdate: new Date()
          });

          case TOGGLE_TODO:
          const todo = state.todos.find(to => to.id === action.id);
          const index = state.todos.indexOf(todo);
          return Object.assign({}, state, {
                todos: [
                  ...state.todos.slice(0, index),
                  Object.assign({}, todo, {isCompleted: !todo.isCompleted}),
                  ...state.todos.slice(index + 1)
                ],
                lastUpdate: new Date()
          });

          case REMOVE_TODO:
          return Object.assign({}, state, {
                todos: state.todos.filter(to => to.id !== action.id),
                lastUpdate: new Date()
          });

          case REMOVE_ALL_TODOS:
          return Object.assign({}, state, {
                todos: [],
                lastUpdate: new Date()
          });
        }

        return state;
  }

  `
};
apip434 = {
  name: 'TodoOverview Component',
  code: `

  import { Component } from '@angular/core';

  import { NgRedux, select } from '@angular-redux/store';
  import { IAppState } from '../store';
  import { REMOVE_ALL_TODOS } from '../actions';

  @Component({
    selector: 'app-todo-overview',
    template: \`
        <p class="text-right">
            <span class="badge badge-danger">
                Last Update: {{ (lastUpdate | async) | date:'mediumTime' }}
                Total Todos: {{ (todos | async).length }}
            </span>
            <button class="btn btn-primary" (click)="clearTodos()">Delete All</button>
        </p>
        <br>
        <br>
    \`
  })
  export class TodoOverviewComponent {
    @select() todos;
    @select() lastUpdate;

    constructor(private ngRedux: NgRedux<IAppState>) { }

    clearTodos() {
      this.ngRedux.dispatch({ type: REMOVE_ALL_TODOS });
    }

  }

  `
};
apip435 = {
  name: 'TodoList Component',
  code: `

  import { Component } from '@angular/core';

  import { NgRedux, select } from '@angular-redux/store';
  import { IAppState } from '../store';
  import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions';
  import { Todo } from '../todo';


  @Component({
    selector: 'app-todo-list',
    template: \`
                <h6>Create Todo</h6>
                <form (ngSubmit)="onSubmit()" #todoForm="ngForm">
                  <div class="form-row">
                      <div class="col-auto">
                            <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Description"
                                  id="description"
                                  [(ngModel)]="model.description"
                                  name="description"
                                  #description="ngModel">
                      </div>
                      <div class="col-auto">
                            <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Responsible"
                                  id="responsible"
                                  [(ngModel)]="model.responsible"
                                  name="responsible"
                                  #responsible="ngModel">
                      </div>
                      <div class="col-auto">
                            <select
                                  class="form-control"
                                  id="priority"
                                  [(ngModel)]="model.priority"
                                  name="priority"
                                  #priority="ngModel">
                                  <option value="low">Low</option>
                                  <option value="medium">Medium</option>
                                  <option value="high">High</option>
                            </select>
                      </div>
                      <div class="col-auto">
                            <button type="submit" class="btn btn-primary">Create</button>
                      </div>
                  </div>
                </form>
                <br>
                <h6>Todos List:</h6>
                <div *ngIf="(todos | async)?.length !== 0">
                <table class="table">
                      <thead class="thead-inverse">
                              <tr>
                                  <th>#</th>
                                  <th>Todo Description</th>
                                  <th>Responsible</th>
                                  <th>Priority</th>
                                  <th></th>
                              </tr>
                      </thead>
                      <tbody>
                          <tr *ngFor="let todo of todos | async">
                              <td><span (click)="toggle(todo)"
                                        [class.completed]="todo.isCompleted">
                                        {{ todo.id }}
                                  </span>
                              </td>
                              <td><span (click)="toggle(todo)"
                                        [class.completed]="todo.isCompleted">
                                        {{ todo.description }}
                                  </span>
                              </td>
                              <td><span (click)="toggle(todo)"
                                        [class.completed]="todo.isCompleted">
                                        {{ todo.responsible }}
                                  </span>
                              </td>
                              <td>
                                  <span *ngIf="todo.priority === 'low'"
                                        class="badge badge-success">Low</span>
                                  <span *ngIf="todo.priority === 'medium'"
                                        class="badge badge-warning">Medium</span>
                                  <span *ngIf="todo.priority === 'high'"
                                        class="badge badge-danger">High</span>
                              </td>
                              <td>
                                    <button class="btn btn-primary" (click)="remove(todo)">
                                      Delete
                                    </button>
                              </td>
                          </tr>
                      </tbody>
                </table>
    \`,
    styles: [\`
      .completed {
          text-decoration: line-through;
      }
    \`]
  })
  export class TodoListComponent {

        @select() todos;

        model: Todo = {
          id: 0,
          description: 'Work Hard | Be Kind | Do More ...',
          responsible: 'Nils',
          priority: 'high',
          isCompleted: false
        };

        constructor(private ngRedux: NgRedux<IAppState>) { }

        onSubmit(): void {
          this.ngRedux.dispatch({ type: ADD_TODO, todo: this.model });

        }

        toggle(todo: Todo): void {
          this.ngRedux.dispatch({ type: TOGGLE_TODO, id: todo.id });
        }

        remove(todo: Todo) {
          this.ngRedux.dispatch({ type: REMOVE_TODO, id: todo.id });
        }

  }

  `
};
apip436 = {
  name: 'NGRX State Management: Package JSON',
  code: `

  {
    "name": "ng5-redux",
    "version": "0.0.0",
    "license": "MIT",
    "scripts": {
      "ng": "ng",
      "start": "ng serve",
      "build": "ng build",
      "test": "ng test",
      "lint": "ng lint",
      "e2e": "ng e2e"
    },
    "private": true,
    "dependencies": {
      "@angular/animations": "^5.2.6",
      "@angular/common": "^5.2.6",
      "@angular/compiler": "^5.2.6",
      "@angular/core": "^5.2.6",
      "@angular/forms": "^5.2.6",
      "@angular/http": "^5.2.6",
      "@angular/platform-browser": "^5.2.6",
      "@angular/platform-browser-dynamic": "^5.2.6",
      "@angular/platform-server": "^5.2.6",
      "@angular/router": "^5.2.6",
      "@ngrx/effects": "^5.1.0",
      "@ngrx/router-store": "^5.0.1",
      "@ngrx/store": "^5.1.0",
      "@ngrx/store-devtools": "^5.1.0",
      "core-js": "^2.4.1",
      "rxjs": "^5.5.6",
      "zone.js": "^0.8.14"
    },
    "devDependencies": {
      "@angular/cli": "^1.7.1",
      "@angular/compiler-cli": "^5.2.6",
      "@angular/language-service": "^4.2.4",
      "@types/jasmine": "~2.5.53",
      "@types/jasminewd2": "~2.0.2",
      "@types/node": "~6.0.60",
      "codelyzer": "~3.1.1",
      "jasmine-core": "~2.6.2",
      "jasmine-spec-reporter": "~4.1.0",
      "karma": "~1.7.0",
      "karma-chrome-launcher": "~2.1.1",
      "karma-cli": "~1.0.1",
      "karma-coverage-istanbul-reporter": "^1.2.1",
      "karma-jasmine": "~1.1.0",
      "karma-jasmine-html-reporter": "^0.2.2",
      "protractor": "~5.1.2",
      "ts-node": "~3.2.0",
      "tslint": "~5.3.2",
      "typescript": "^2.6.2"
    }
  }

  `
};
apip437 = {
  name: 'Counter App: App Module',
  code: `

  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { FormsModule } from '@angular/forms';

  import { StoreModule } from '@ngrx/store';

  import { AppComponent, counterReducer } from './app.component';


  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      StoreModule.forRoot({ count: counterReducer })
    ],
    providers: [],
    bootstrap: [ AppComponent ]
  })
  export class AppModule {

  }

  `
};
apip438 = {
  name: 'App Component With Reducer',
  code: `

  import { Action } from '@ngrx/store';

  export const INCREMENT = 'INCREMENT';
  export const DECREMENT = 'DECREMENT';
  export const RESET = 'RESET';

  export function counterReducer(state: number = 0, action: Action) {

        switch (action.type) {
          case INCREMENT:
            return state + 1;
          case DECREMENT:
            return state - 1;
          case RESET:
            return 0;
          default:
            return state;
        }
  }

  /********************************************************************** */

  import { Component } from '@angular/core';
  import { Store, select } from '@ngrx/store';
  import { Observable } from 'rxjs/Observable';

  interface AppState {
    count: number;
  }

  @Component({
    selector: 'app-root',
    template: \`
          <div class="container">
            <div>
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">Counter</h3>
                        <h6 class="card-subtitle mb-2 text-muted">Angular & ngrx</h6>
                        <h1>Current Count: {{ count$ | async }}</h1>
                        <button class="btn btn-danger" (click)="increment()">
                            Increment
                        </button>
                        <button class="btn btn-success" (click)="decrement()">
                            Decrement
                        </button>
                        <button class="btn btn-warning" (click)="reset()">
                            Reset Counter
                        </button>
                    </div>
                </div>
            </div>
          </div>
    \`
  })
  export class AppComponent {
        count$: Observable<number>;

        constructor(private store: Store<AppState>) {
          this.count$ = store.pipe(select('count'));
        }

        increment() {
          this.store.dispatch({ type: INCREMENT });
        }

        decrement() {
          this.store.dispatch({ type: DECREMENT });
        }

        reset() {
          this.store.dispatch({ type: RESET });
        }

  }

  `
};
apip439 = {
  name: 'Forms App: App Module',
  code: `

  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';

  import { StoreModule } from '@ngrx/store';
  import { StoreDevtools } from '@ngrx/store-devtools';
  import { EffectsModule } from '@ngrx/effects';

  import { AppComponent} from './app.component';
  import { AddressComponent } from './address/address.component';
  import { RangeComponent } from './range/range.component';
  import { reducers } from './reducers';

  @NgModule({
    declarations: [
      AppComponent,
      AddressComponent,
      RangeComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      StoreModule.forRoot(reducers),
      EffectsModule.forRoot([])

    ],
    providers: [ ],
    bootstrap: [ AppComponent ]
  })
  export class AppModule {

  }


  `
};
apip440 = {
  name: 'Actions',
  code: `

  import { Action } from '@ngrx/store';

  export const CHANGE_FORM = '[Examples > Form] Change Form';
  export const RESET = '[Examples > Form] Reset';

  export class ChangeForm implements Action {
    readonly type = CHANGE_FORM;

    constructor(public payload: any) { }
  }

  export class Reset implements Action {
    readonly type = RESET;
  }

  export type Actions = ChangeForm | Reset;


  `
};
apip441 = {
  name: 'Reducers',
  code: `

  import { ActionReducerMap, createSelector, createFeatureSelector,
    ActionReducer, MetaReducer } from '@ngrx/store';

  import * as actions from './actions';

  export const reducers: ActionReducerMap<State> = {
    form: formReducer
  };

  export interface State {
    form: Form;
  }

  export interface Form {
    address: Address;
    range: Range;
  }

  export interface Address {
    zip: string;
    city: string;
    street: string;
  }

  export interface Range {
    min: number;
    max: number;
  }


  export const initialForm: Form = {
   address: {
     zip: '',
     city: '',
     street: 'Sunrise Boulevard'
   },
   range: {
     min: 10,
     max: 100
   }
};

export function formReducer(state: Form = initialForm,
                       action: actions.Actions): Form {

   switch (action.type) {
     case actions.CHANGE_FORM: {
           return { ...state, ...action.payload };
     }
     case actions.RESET: {
       return state;
     }
     default: {
       return state;
     }
   }
}

export const getAddress = (state: Form) => {
console.log('getAddress');
return state.address;
};

// selectors
export const getFormState = createFeatureSelector<Form>('form');
export const getFormAddress = createSelector(getFormState, getAddress);
export const getFormAddressValidity = createSelector(getFormAddress, (address) => ({
        city: !!address.city,
        zip: !!address.zip
}));

export const getIsFormAddressValid =
           createSelector(getFormAddressValidity, ({ city, zip }) =>
           console.log('chech validity of address') || !!(city && zip));

export const getIsFormValid =
           createSelector(getIsFormAddressValid, (isFormAddress) => isFormAddress);


  `
};
apip442 = {
  name: 'Address Component',
  code: `

  import { Component, ChangeDetectorRef,
           ChangeDetectionStrategy, Input } from '@angular/core';
  import { ControlValueAccessor, NG_VALUE_ACCESSOR,
           FormGroup, FormControl } from '@angular/forms';

  @Component({
    selector: 'app-address',
    template: \`
            <div [formGroup]="form">
                <div>
                      <label>zip *</label>
                      <input type="text" formControlName="zip"
                      [class.invalid]="!validity.zip && zip.touched"
                      (blur)="onTouched()">
                </div>
                <div>
                      <label>city *</label>
                      <input type="text" formControlName="city"
                      [class.invalid]="!validity.city && city.touched"
                      (blur)="onTouched()">
                </div>
                <div>
                      <label>street</label>
                      <input type="text" formControlName="street"
                      (blur)="onTouched()">
                </div>
                <pre>{{ form.value | json }}</pre>
            </div>

    \`,
    styles: [\`
      :host {
        display: block;
        background-color: #cff;
      }
    \`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: AddressComponent,
        multi: true
      }
    ]
  })
  export class AddressComponent implements ControlValueAccessor {
    @Input() validity: {[key: string]: boolean };

    form: FormGroup;
    onTouched: () => void;

    get zip() { return this.form.get('zip'); }
    get city() { return this.form.get('city'); }

    constructor(private changeDetectorRef: ChangeDetectorRef) {
      this.form = new FormGroup({
        zip: new FormControl(),
        city: new FormControl(),
        street: new FormControl()
      });
    }

    markAsUnTouched() {
      // this.form.markAsUntouched();
      // const controls = this.form.controls;
      // Object.keys(controls).forEach((key) => {
      //         controls[key].markAsUntouched();
      // });
      // this.changeDetectorRef.markForCheck();
    }

    markAsTouched() {
      this.form.markAsTouched();
      const controls = this.form.controls;
      Object.keys(controls).forEach((key) => {
              controls[key].markAsTouched();
      });
      this.changeDetectorRef.markForCheck();
    }

    // controlvalueaccessor
    writeValue(obj: any) {
      console.log('AddressComponent#writeValue', obj);
      if (obj) {
        this.form.setValue(obj, { emitEvent: false });
        this.changeDetectorRef.markForCheck();
      }
    }

    registerOnChange(fun: any) {
      this.form.valueChanges.subscribe(fun);
    }

    registerOnTouched(fun: any) {
      this.onTouched = fun;
    }

  }

  `
};
apip443 = {
  name: 'Range Component',
  code: `

  import { Component, ChangeDetectionStrategy, ElementRef,
           Input, ViewChild } from '@angular/core';
  import { AbstractControl, ControlValueAccessor, NG_VALIDATORS,
           NG_VALUE_ACCESSOR, Validator, FormGroup,
           Validators, FormControl } from '@angular/forms';

  @Component({
    selector: 'app-range',
    template: \`
          <div [formGroup]="form">
              <div>
                  <label>minimum</label>
                  <input type="number" formControlName="min" (blur)="onTouched()">
              </div>
              <div>
                  <label>max</label>
                  <input type="number" formControlName="max" (blur)="onTouched()">
              </div>
              <pre>{{ form.value | json }}</pre>
          </div>
    \`,
    styles: [\`
      :host {
        display: block;
        background-color: #ccf;
      }
    \`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: RangeComponent,
        multi: true
      }
    ]
  })
  export class RangeComponent implements ControlValueAccessor {
    form: FormGroup;
    onTouched: () => void;

    private get min() {
      return this.form.get('min');
    }

    private get max() {
      return this.form.get('max');
    }

    constructor() {
      this.form = new FormGroup({
        min: new FormControl(),
        max: new FormControl()
      });

      this.min.valueChanges.subscribe((value: number) => {
        if (value < 0) {
          this.min.setValue(0, { emitEvent: false });
        } else if (value > this.max.value) {
          this.max.setValue(value, { emitEvent: false });
        }
      });

      this.max.valueChanges.subscribe((value: number) => {
        if (value < 0) {
          this.max.setValue(0, { emitEvent: false });
        } else if (value < this.min.value) {
          this.min.setValue(value, { emitEvent: false });
        }
      });
    }

    // controlvalueaccessor
    writeValue(obj: any) {
      if (obj) {
        this.form.setValue(obj, { emitEvent: false });
      }
    }

    registerOnChange(fun: any) {
      this.form.valueChanges.subscribe(val => {
        fun(val);
      });
    }

    registerOnTouched(fun: any) {
      this.onTouched = fun;
    }

  }

  `
};
apip444 = {
  name: 'App Component',
  code: `

  import { Component, ViewChildren, QueryList, ViewChild,
           ChangeDetectorRef, ChangeDetectionStrategy, OnInit } from '@angular/core';
  import { FormBuilder, FormControl, FormGroup,
           Validators, NgForm } from '@angular/forms';

  import { Store } from '@ngrx/store';
  import * as fromRoot from './reducers';
  import { Form } from './reducers';
  import * as actions from './actions';

  import { AddressComponent } from './address/address.component';

  import { Observable } from 'rxjs/Observable';
  import 'rxjs/add/operator/debounceTime';


  @Component({
    selector: 'app-root',
    template: \`
                <form class="margin"
                      #ngForm="ngForm"
                      (ngSubmit)="onSubmit()"
                      novalidate>
                <app-address name="address"
                             [ngModel]="(form$ | async).address"
                             [validity]="addressValidity$ | async">
                </app-address>
                <app-range name="range"
                          [ngModel]="(form$ | async).range">
                </app-range>
                <button>submit</button>
                <pre>ngForm.status: {{ ngForm.status | json }}</pre>
                <pre>isFormValid$: {{ isFormValid$ | async | json }}</pre>
                </form>
                <div style="background-color: #ffc">
                    <pre>form$: {{ form$ | async | json }}</pre>
                </div>
    \`,
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class AppComponent implements OnInit {
      @ViewChild(NgForm) private ngForm: NgForm;
      @ViewChild(AddressComponent) private address;

      form$: Observable<Form>;
      addressValidity$: Observable<{[key: string]: boolean}>;
      isFormValid$: Observable<boolean>;

      constructor(private store: Store<fromRoot.State>) { }

      ngOnInit() {
        this.form$ = this.store.select(fromRoot.getFormState);
        this.addressValidity$ = this.store.select(fromRoot.getFormAddressValidity);
        this.isFormValid$ = this.store.select(fromRoot.getIsFormValid);

        this.ngForm.valueChanges.debounceTime(0).subscribe(value => {
                console.log('ngForm.valueChanges', value);
                this.store.dispatch(new actions.ChangeForm(value));
        });
      }

      onSubmit() {
        console.log('submit');
        this.address.markAsTouched();
      }

  }

  `
};
apip445 = {
  name: 'NGRX Angular Material Todo App: Package JSON',
  code: `

  {
    "name": "ng5-ngrx",
    "version": "0.0.0",
    "license": "MIT",
    "scripts": {
      "ng": "ng",
      "start": "ng serve",
      "build": "ng build",
      "test": "ng test",
      "lint": "ng lint",
      "e2e": "ng e2e"
    },
    "private": true,
    "dependencies": {
      "@angular/animations": "^5.2.6",
      "@angular/cdk": "^5.2.2",
      "@angular/common": "^5.2.6",
      "@angular/compiler": "^5.2.6",
      "@angular/core": "^5.2.6",
      "@angular/forms": "^5.2.6",
      "@angular/http": "^5.2.6",
      "@angular/material": "^5.2.2",
      "@angular/platform-browser": "^5.2.6",
      "@angular/platform-browser-dynamic": "^5.2.6",
      "@angular/platform-server": "^5.2.6",
      "@angular/router": "^5.2.6",
      "@ngrx/effects": "^5.1.0",
      "@ngrx/router-store": "^5.0.1",
      "@ngrx/store": "^5.1.0",
      "@ngrx/store-devtools": "^5.1.0",
      "angular-in-memory-web-api": "^0.5.3",
      "core-js": "^2.4.1",
      "hammerjs": "^2.0.8",
      "rxjs": "^5.5.6",
      "zone.js": "^0.8.14"
    },
    "devDependencies": {
      "@angular/cli": "^1.7.1",
      "@angular/compiler-cli": "^5.2.6",
      "@angular/language-service": "^4.2.4",
      "@types/jasmine": "~2.5.53",
      "@types/jasminewd2": "~2.0.2",
      "@types/node": "~6.0.60",
      "codelyzer": "~3.1.1",
      "jasmine-core": "~2.6.2",
      "jasmine-spec-reporter": "~4.1.0",
      "karma": "~1.7.0",
      "karma-chrome-launcher": "~2.1.1",
      "karma-cli": "~1.0.1",
      "karma-coverage-istanbul-reporter": "^1.2.1",
      "karma-jasmine": "~1.1.0",
      "karma-jasmine-html-reporter": "^0.2.2",
      "protractor": "~5.1.2",
      "ts-node": "~3.2.0",
      "tslint": "~5.3.2",
      "typescript": "^2.6.2"
    }
  }

  `
};
apip446 = {
  name: 'Index HTML HTML-CENTRIC HERE',
  code: `
  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <title>ng5-ngrx</title>
    <base href="/">

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700" rel="stylesheet">
  </head>
  <body>
  <app-root>launch my baby ...</app-root>
  </body>
  </html>


  `
};
apip447 = {
  name: 'Global Styles CSS',
  code: `

  /* Master Styles */
  @import "~@angular/material/prebuilt-themes/indigo-pink.css";

  `
};
apip448 = {
  name: 'Main TS',
  code: `

  import { enableProdMode } from '@angular/core';
  import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

  import 'hammerjs';

  import { AppModule } from './app/app.module';
  import { environment } from './environments/environment';

  if (environment.production) {
    enableProdMode();
  }

  platformBrowserDynamic().bootstrapModule(AppModule);

  `
};
apip449 = {
  name: 'App Module',
  code: `

  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  import { HttpClientModule } from '@angular/common/http';
  import { RouterModule } from '@angular/router';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';

  import { MatInputModule, MatButtonModule, MatListModule,
           MatCheckboxModule, MatCardModule } from '@angular/material';

  import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

  import { StoreModule } from '@ngrx/store';
  import { StoreDevtools } from '@ngrx/store-devtools';

  import { AppComponent} from './app.component';
  import { ListTodoComponent } from './list-todo/list-todo.component';
  import { HomeComponent } from './home/home.component';
  import { DetailsComponent } from './details/details.component';
  import { AddTodoComponent } from './add-todo/add-todo.component';

  import { appRoutes } from './routes';
  import { todoReducer } from './todo.reducer';
  import { InMemoryDataService } from './in-memory-data.service';
  import { TodosService } from './todos.service';

  @NgModule({
    declarations: [
      AppComponent,
      ListTodoComponent,
      HomeComponent,
      DetailsComponent,
      AddTodoComponent
    ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      MatInputModule,
      MatListModule,
      MatCheckboxModule,
      MatCardModule,
      StoreModule.forRoot({ todo: todoReducer }),
      RouterModule.forRoot(appRoutes),
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,
                                            { dataEncapsulation: false })
    ],
    providers: [ TodosService ],
    bootstrap: [ AppComponent ]
  })
  export class AppModule {

  }

  `
};
apip450 = {
  name: 'In Memory Data Service',
  code: `

  import { InMemoryDbService } from 'angular-in-memory-web-api';


  export class InMemoryDataService implements InMemoryDbService {

            createDb() {
              const heroesTodos = [
                  {
                    id: 1,
                    name: 'Create new Angular Apps',
                    description: 'Newest Versions of everything',
                    state: true
                  },
                  {
                    id: 2,
                    name: 'Write new Angular Blog Posts',
                    description: 'New Features, API, Code, Events',
                    state: true
                  },
                  {
                    id: 3,
                    name: 'Create new Angular Tutorials',
                    description: 'Angular CLI, NGRX, Material Design, D3',
                    state: true
                  },
                  {
                    id: 4,
                    name: 'Create and Publish an Angular Library',
                    description: 'NGPackagr',
                    state: true
                  },
                  {
                    id: 5,
                    name: 'Contribute in Open Source Repositories on GitHub',
                    description: 'Contribute, Contribute, Contribute',
                    state: true
                  },
                  {
                    id: 6,
                    name: 'Get a good wife. Get married.',
                    description: \`Make a Big Array of Children. A Big Bunch.
                                  Live happily ever after ...\`,
                    state: true
                  }
              ];
              return { heroesTodos };
            }
  }


  `
};
apip451 = {
  name: 'Todos Service',
  code: `

  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';

  import { Observable } from 'rxjs/Observable';

  @Injectable()
  export class TodosService {

    private heroesTodosURL = 'api/heroesTodos';

    constructor(private http: HttpClient) { }

    loadTodos(): Observable<any> {
      return this.http.get(this.heroesTodosURL);
    }

  }

  `
};
apip452 = {
  name: 'Todo Class',
  code: `

  export class Todo {
    id: number;
    name: string;
    description: string;
    state: boolean;
  }

  `
};
apip453 = {
  name: 'Todo Reducer',
  code: `

  import { Todo } from './todo';

  export function todoReducer(state: Todo[] = [], action) {

        switch (action.type) {
          case 'LOAD_TODOS':
              return state = action.payload;

         case 'TOGGLE_TODO':
              state.map(todo => {
                  if (todo.id === action.targetTodo.id) {
                    todo.state = !action.targetTodo.state;
                    const index = state.indexOf(action.targetTodo);
                    if (action.targetTodo.state !== true) {
                      state = [...state.slice(0, index), ...state.slice(index + 1),
                               action.targetTodo];
                    } else {
                      state = [action.targetTodo, ...state.slice(0, index),
                              ...state.slice(index + 1)];
                    }
                  }
              });
              return state;

        case 'ADD_TODO':
              const index = state.length;
              action.addTodo.id = index + 1;
              action.addTodo.state = true;
              state = [action.addTodo, ...state];
              return state;
        }
  }

  `
};
apip454 = {
  name: 'Routes',
  code: `

  import { Routes } from '@angular/router';

  import { HomeComponent } from './home/home.component';
  import { DetailsComponent } from './details/details.component';


  export const appRoutes: Routes = [
        {
          path: '',
          redirectTo: '/home',
          pathMatch: 'full'
        },
        { path: 'home', component: HomeComponent },
        { path: 'details/:id', component: DetailsComponent }
  ];

  `
};
apip455 = {
  name: 'App State',
  code: `

  import { Todo } from './todo';

  export interface AppState {
    readonly todo: Todo[];
  }

  `
};
apip456 = {
  name: 'App Component',
  code: `

  import { Component } from '@angular/core';


  @Component({
    selector: 'app-root',
    template: \`
          <div class="content-list">
                <router-outlet></router-outlet>
          </div>
    \`,
    styles: [\`
            .content-list {
              width: 600px;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
    \`]
  })
  export class AppComponent { }

  `
};
apip457 = {
  name: 'AddTodo Component',
  code: `

  import { Component, OnInit } from '@angular/core';
  import { FormBuilder, FormGroup } from '@angular/forms';

  import { Store } from '@ngrx/store';

  import { Todo } from '../todo';
  import { AppState } from '../app.state';

  import { Observable } from 'rxjs/Observable';

  @Component({
    selector: 'app-add-todo',
    template: \`
          <form [formGroup]="form">
              <mat-form-field>
                <input matInput
                       ngModel
                       formControlName="name"
                       placeholder="Name"
                       required>
              </mat-form-field>
              <mat-form-field>
                <textarea matInput
                          ngModel
                          formControlName="description"
                          placeholder="Description">
                </textarea>
              </mat-form-field>
          </form>
          <div class="btn-add-todo">
                <button mat-raised-button
                        [disabled]="!form.valid"
                        (click)="add(form.value)">
                  Add
                </button>
          </div>
    \`,
    styles: [\`
          .btn-add-todo {
            text-align: right;
            padding-right: 16px;
          }
          mat-form-field {
            width: 47%;
            padding-left: 10px;
          }
    \`]
  })
  export class AddTodoComponent implements OnInit {
    todos$: Observable<Todo[]>;
    form: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private store: Store<AppState>) {
                  this.todos$ = this.store.select('todo');
                }

    ngOnInit() {
      this.form = this.formBuilder.group({
                  id: null,
                  name: '',
                  description: '',
                  state: null
      });
    }

    add(todo) {
      this.store.dispatch({
          type: 'ADD_TODO',
          addTodo: todo
      });
      this.form.reset();
    }

  }

  `
};
apip458 = {
  name: 'Details Component',
  code: `

  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute, Router } from '@angular/router';

  import { Store } from '@ngrx/store';

  import { AppState } from '../app.state';
  import { Todo } from '../todo';

  import { Observable } from 'rxjs/Observable';

  @Component({
    selector: 'app-details',
    template: \`
            <mat-card class="details-box">
                  <mat-card-header>
                          <mat-card-title><h2>Todo Details</h2></mat-card-title>
                  </mat-card-header>
                  <mat-card-content>
                    <p><strong>Name: </strong>{{ todo?.name }}</p>
                    <p><strong>Description: </strong>{{ todo?.description }}</p>
                    <p><strong>State: </strong>
                              {{ todo?.state ? 'Activate' : 'Deactivate' }}</p>
                  </mat-card-content>
                  <mat-card-footer class="button-box">
                        <button routerLink="/home" mat-raised-button>Close</button>
                  </mat-card-footer>
            </mat-card>
    \`,
    styles: [\`
        .details-box {
          width: 500px;
          height: 220px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        mat-card-header {
          justify-content: center;
        }
        mat-card-footer {
          text-align: right;
          padding-right: 8px;
        }
    \`]
  })
  export class DetailsComponent implements OnInit {
    todo: Todo;
    todos$: Observable<Todo[]>;
    todoId: number = null;

    constructor(private store: Store<AppState>,
                private route: ActivatedRoute,
                private router: Router ) {
      this.todos$ = this.store.select('todo');
                }

    loadDetails() {
      this.todos$.subscribe(todos => {
        const todoId = +this.route.snapshot.params.id;
        todos.map(todo => {
          if (todoId === todo.id) {
            this.todo = todo;
          }
        });
      });
    }

    ngOnInit() {
      this.loadDetails();
    }

  }

  `
};
apip459 = {
  name: 'Home Component',
  code: `

  import { Component, OnInit } from '@angular/core';

  import { Store } from '@ngrx/store';

  import { AppState } from '../app.state';
  import { Todo } from '../todo';
  import { TodosService } from '../todos.service';

  import { Observable } from 'rxjs/Observable';

  @Component({
    selector: 'app-home',
    template: \`
            <app-list-todo></app-list-todo>
    \`
  })
  export class HomeComponent implements OnInit {
    todos$: Observable<Todo[]>;

    constructor(private todosService: TodosService,
                private store: Store<AppState>) {
          this.todos$ = this.store.select('todo');
                }

    getTodos() {
      this.todosService.loadTodos().subscribe(todos => {
        this.store.dispatch({
          type: 'LOAD_TODOS',
          payload: todos
        });
      });
    }

    ngOnInit() {
      this.todos$.subscribe(todos => {
        if (!todos) {
          this.getTodos();
        }
      });
    }

  }

  `
};
apip460 = {
  name: 'ListTodo Component',
  code: `

  import { Component } from '@angular/core';
  import { Router } from '@angular/router';

  import { Store } from '@ngrx/store';

  import { Todo } from '../todo';
  import { AppState } from './../app.state';
  import { TodosService } from './../todos.service';

  import { Observable } from 'rxjs/Observable';


  @Component({
    selector: 'app-list-todo',
    template: \`
              <mat-card>
                    <mat-card-header>
                          <h2>What needs to be done?</h2>
                    </mat-card-header>
                    <mat-card-content>
                        <app-add-todo></app-add-todo>
                        <mat-list>
                            <mat-list-item *ngFor="let todo of todos$ | async">
                            <mat-divider></mat-divider>
                            <p matLine (click)="details(todo)"
                              [ngClass]="{'checked': todo.state === false}">
                              {{ todo.name }}
                            </p>
                            <p matLine>{{ todo.state ? 'Activate' : 'Deactivate' }}</p>
                            <mat-checkbox [checked]="!todo.state" (change)="onSelect(todo)">
                            </mat-checkbox>
                            </mat-list-item>
                        </mat-list>
                    </mat-card-content>
              </mat-card>
    \`,
    styles: [\`
          .checked {
            text-decoration: line-through;
          }
          mat-card-header {
            justify-content: center;
            background: #f3f3f3;
            border: solid 1px #006699;
          }
          mat-card-content {
            text-align: left;
          }
    \`]
  })
  export class ListTodoComponent  {
    todos$: Observable<Todo[]>;

    constructor(private todosService: TodosService,
                public router: Router,
                private store: Store<AppState>) {
                this.todos$ = this.store.select('todo');
                }

      details(todo: Todo) {
          this.router.navigate(['/details/' + todo.id]);
      }

      onSelect(todo) {
        this.store.dispatch({
            type: 'TOGGLE_TODO',
            targetTodo: todo
        });
      }

  }

  `
};
apip461 = {
  name: '',
  code: ``
};
apip462 = {
  name: '',
  code: ``
};
apip463 = {
  name: '',
  code: ``
};
apip464 = {
  name: '',
  code: ``
};
apip465 = {
  name: '',
  code: ``
};
apip466 = {
  name: '',
  code: ``
};
apip467 = {
  name: '',
  code: ``
};
apip468 = {
  name: '',
  code: ``
};
apip469 = {
  name: '',
  code: ``
};
apip470 = {
  name: '',
  code: ``
};
apip471 = {
  name: '',
  code: ``
};
apip472 = {
  name: '',
  code: ``
};
apip473 = {
  name: '',
  code: ``
};
apip474 = {
  name: '',
  code: ``
};
apip475 = {
  name: '',
  code: ``
};
apip476 = {
  name: '',
  code: ``
};
apip477 = {
  name: '',
  code: ``
};
apip478 = {
  name: '',
  code: ``
};
apip479 = {
  name: '',
  code: ``
};
apip480 = {
  name: '',
  code: ``
};
apip481 = {
  name: '',
  code: ``
};
apip482 = {
  name: '',
  code: ``
};
apip483 = {
  name: '',
  code: ``
};
apip484 = {
  name: '',
  code: ``
};
apip485 = {
  name: '',
  code: ``
};
apip486 = {
  name: '',
  code: ``
};
apip487 = {
  name: '',
  code: ``
};
apip488 = {
  name: '',
  code: ``
};
apip489 = {
  name: '',
  code: ``
};
apip490 = {
  name: '',
  code: ``
};
apip491 = {
  name: '',
  code: ``
};
apip492 = {
  name: '',
  code: ``
};
apip493 = {
  name: '',
  code: ``
};
apip494 = {
  name: '',
  code: ``
};
apip495 = {
  name: '',
  code: ``
};
apip496 = {
  name: '',
  code: ``
};
apip497 = {
  name: '',
  code: ``
};
apip498 = {
  name: '',
  code: ``
};
apip499 = {
  name: '',
  code: ``
};
apip500 = {
  name: '',
  code: ``
};

  goToTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  constructor(private route: ActivatedRoute,
              private router: Router,
              private postService: PostService) { }

  ngOnInit() {
    this.post$ = this.postService.currentPost;
    this.posts$ = this.postService.posts;
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.postService.loadAllPosts(+params.get('id'));
    });
    this.postsSubscription = this.posts$.subscribe(posts => {
          this.postsLength = posts.length;
    });
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }


}
