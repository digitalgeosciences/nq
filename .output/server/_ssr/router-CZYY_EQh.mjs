import { _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CZYY_EQh.js
var import_jsx_runtime = require_jsx_runtime();
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var styles_default = "/assets/styles-hT6z5jT_.css";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		"data-tsd-source": "/src/routes/__root.tsx:17:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			"data-tsd-source": "/src/routes/__root.tsx:18:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					"data-tsd-source": "/src/routes/__root.tsx:19:9",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					"data-tsd-source": "/src/routes/__root.tsx:20:9",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					"data-tsd-source": "/src/routes/__root.tsx:21:9",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					"data-tsd-source": "/src/routes/__root.tsx:24:9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						"data-tsd-source": "/src/routes/__root.tsx:25:11",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		"data-tsd-source": "/src/routes/__root.tsx:42:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			"data-tsd-source": "/src/routes/__root.tsx:43:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					"data-tsd-source": "/src/routes/__root.tsx:44:9",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					"data-tsd-source": "/src/routes/__root.tsx:47:9",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					"data-tsd-source": "/src/routes/__root.tsx:50:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						"data-tsd-source": "/src/routes/__root.tsx:51:11",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						"data-tsd-source": "/src/routes/__root.tsx:60:11",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$1 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				name: "author",
				content: "Naif Alqubalee"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500;600&family=Outfit:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
			},
			{
				rel: "icon",
				href: `/favicon.ico`,
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		"data-tsd-source": "/src/routes/__root.tsx:100:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", {
			"data-tsd-source": "/src/routes/__root.tsx:101:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, { "data-tsd-source": "/src/routes/__root.tsx:102:9" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			"data-tsd-source": "/src/routes/__root.tsx:104:7",
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, { "data-tsd-source": "/src/routes/__root.tsx:106:9" })]
		})]
	});
}
function RootComponent() {
	const { queryClient } = Route$1.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		"data-tsd-source": "/src/routes/__root.tsx:116:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, { "data-tsd-source": "/src/routes/__root.tsx:118:7" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
			richColors: true,
			position: "bottom-right",
			"data-tsd-source": "/src/routes/__root.tsx:119:7"
		})]
	});
}
var $$splitComponentImporter = () => import("./routes-C-RGkaVW.mjs");
var rootRouteChildren = { IndexRoute: createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Naif Alqubalee | Backend Software Engineer" },
		{
			name: "description",
			content: "Backend Software Engineer specializing in secure, scalable NestJS, Node.js, TypeScript, and PostgreSQL systems."
		},
		{
			property: "og:title",
			content: "Naif Alqubalee | Backend Software Engineer"
		},
		{
			property: "og:description",
			content: "Explore backend projects, skills, and certifications focused on secure, scalable systems."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
}).update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0,
		basepath: "/"
	});
};
//#endregion
export { getRouter };
