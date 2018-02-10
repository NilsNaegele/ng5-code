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

p79 = {
  name: '',
  code: ``
};

p80 = {
  name: '',
  code: ``
};

p81 = {
  name: '',
  code: ``
};

p82 = {
  name: '',
  code: ``
};

p83 = {
  name: '',
  code: ``
};

p84 = {
  name: '',
  code: ``
};

p85 = {
  name: '',
  code: ``
};

p86 = {
  name: '',
  code: ``
};

p87 = {
  name: '',
  code: ``
};

p88 = {
  name: '',
  code: ``
};

p89 = {
  name: '',
  code: ``
};

p90 = {
  name: '',
  code: ``
};

p91 = {
  name: '',
  code: ``
};

p92 = {
  name: '',
  code: ``
};
p93 = {
  name: '',
  code: ``
};
p94 = {
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
