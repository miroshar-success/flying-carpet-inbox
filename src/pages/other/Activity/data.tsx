// images
import img1 from '../../../assets/images/small/img-1.jpg';
import img2 from '../../../assets/images/small/img-2.jpg';
import img3 from '../../../assets/images/small/img-3.jpg';

interface TimelinePost {
    id: number;
    date: number;
    month?: string;
    postTitle?: string;
    content?: string;
}

export interface TimelineItemTypes {
    id: number;
    day?: string;
    posts: TimelinePost[];
}

const timeLine1: TimelineItemTypes = {
    id: 1,
    posts: [
        {
            id: 1,
            date: 2,
            month: 'Jun',
            postTitle: 'Event One',
            content: `<p class="text-muted">It will be as simple as occidental in fact it will be Occidental Cambridge friend</p>
                    <div><a href="#" class="btn btn-primary btn-sm">Read more</a> </div>`,
        },
        {
            id: 2,
            date: 3,
            month: 'Jun',
            postTitle: 'Event Two',
            content: `
        <p class="text-muted">To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental</p>
           <ul class="text-muted">
          <li class="py-1">Sed ut perspiciatis unde</li>
           <li class="py-1">Nemo enim ipsam</li>
           </ul>
        `,
        },
        {
            id: 3,
            date: 4,
            month: 'Jun',
            postTitle: 'Event Three',
            content: `
                <p class="text-muted mb-4">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium deleniti</p>
                  <div class="album">
                 <a href="#" class="me-1">
                     <img alt="" src=${img1}>
                  </a>
                  <a href="#" class="me-1">
                 <img alt="" src=${img2}>
                   </a>
                   <a href="#" class="me-1">
                   <img alt="" src=${img3}>
                  </a>
                  </div>
                `,
        },
        {
            id: 4,
            date: 5,
            month: 'Jun',
            postTitle: 'Event Four',
            content: ` <p class="text-muted mb-0">For science, music, sport, etc, Europe uses the same vocabulary their pronunciation and their most common words.</p>`,
        },
    ],
};

const timeLine2: TimelineItemTypes = {
    id: 2,
    day: 'Today',
    posts: [
        {
            id: 1,
            date: 2,
            month: 'Jun',
            postTitle: 'Event One',
            content: `
             <p class="text-muted">At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles. Ma quande lingues coalesce li del resultant.</p>
              <p class="text-muted">It will be as simple as in fact, it will be Occidental.</p>
              <div>
            <a href="#" class="btn btn-primary btn-sm">Read more</a>
             </div>
            `,
        },
        {
            id: 2,
            date: 3,
            month: 'Jun',
            postTitle: 'Event Two',
            content: `
             <p class="text-muted">If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages</p>
              <ul class="text-muted mb-0">
                  <li class="py-1">Sed ut perspiciatis unde</li>
                  <li class="py-1">Nemo enim ipsam</li>
              </ul>
            `,
        },
        {
            id: 3,
            date: 4,
            month: 'Jun',
            postTitle: 'Event Three',
            content: `
             <p class="text-muted mb-4">Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.</p>
            <div class="timeline-album">
                  <a href="#" class="me-1">
                      <img alt="" src=${img1}>
                  </a>
                  <a href="#" class="me-1">
                      <img alt="" src=${img2}>
                  </a>
                  <a href="#" class="me-1">
                      <img alt="" src=${img3}>
                  </a>
              </div>
            `,
        },
        {
            id: 4,
            date: 4,
            month: 'Jun',
            postTitle: 'Event Four',
            content: `
            <p class="text-muted">Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ their pronunciation</p>
            <p class="text-muted mb-0">To an English person, it will seem like simplified English as a skeptical Cambridge friend of mine told me what occidental</p>
            `,
        },
    ],
};

export { timeLine1, timeLine2 };
