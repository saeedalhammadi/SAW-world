import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { SimpleSlug } from "./quartz/util/path"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      Instagram: "https://www.instagram.com/saeedal7mmadi/",
      X: "https://x.com/saeedal7mmadi",
      LinkedIn: "https://www.linkedin.com/in/saeedal7mmadi/",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "SAW STORY",
    }),
    Component.ArticleTitle(),
    Component.TagList(),
    Component.ContentMeta({
      showReadingTime: false, 
    }),
    Component.Graph(),
    /*Component.RecentNotes({
      title: "آخر شظايا الوعي",
      limit: 7, 
      // اجعل الرابط يذهب للمجلد مباشرة
      linkToMore: "عالم-فكري/مقالات/" as SimpleSlug,
      filter: (f) => 
        // استخدام includes أضمن دائماً مع المجلدات في Quartz
        (f.filePath?.includes("مقالات") ?? false) &&
        // التأكد من استبعاد أي صفحة فهرس داخل المجلد إذا وجدت
        f.slug !== "index" &&
        !f.frontmatter?.tags?.includes("أرشفة"),
    }),*/
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    //Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
