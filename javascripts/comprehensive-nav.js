// Comprehensive sidebar navigation with full nested structure
(function() {

  var SECTIONS = [
    {
      key: 'quick-start',
      label: 'Quick Start',
      href: 'quick-start/getting-started-studio.html',
      pages: [
        { name: 'Getting started as an Admin', href: 'quick-start/getting-started-studio.html' },
        { name: 'Getting started as a User',   href: 'quick-start/getting-started-explorer.html' },
        { name: 'Access Actian AI Analyst',    href: 'quick-start/access-wobby.html' }
      ]
    },
    {
      key: 'account',
      label: 'Account',
      href: 'account/two-factor-authentication-2fa.html',
      pages: [
        { name: 'Two-Factor Authentication (2FA)', href: 'account/two-factor-authentication-2fa.html' }
      ]
    },
    {
      key: 'agent/working-with-agents',
      label: 'Explorer',
      href: 'agent/working-with-agents/index.html',
      pages: [
        { name: 'Actian AI Analyst Explorer', href: 'agent/working-with-agents/index.html', pages: [
          { name: 'Overview',                        href: 'agent/working-with-agents/wobby-explorer.html' },
          { name: 'Asking Questions',                href: 'agent/working-with-agents/asking-questions.html' },
          { name: 'Saved Prompts',                   href: 'agent/working-with-agents/saved-prompts.html' },
          { name: 'Tips for Quick Analysis',         href: 'agent/working-with-agents/tips-for-quick-analysis.html' }
        ]}
      ]
    },
    {
      key: 'ai-analysts',
      label: 'AI Analysts',
      href: 'ai-analysts/creating-an-agent/models.html',
      pages: [
        { name: 'Creating an AI Analyst', href: 'agent/creating-an-agent/index.html', pages: [
          { name: 'Models',             href: 'ai-analysts/creating-an-agent/models.html' },
          { name: 'Instructions',       href: 'agent/creating-an-agent/agent-instructions.html' },
          { name: 'Access Management',  href: 'agent/creating-an-agent/access-management.html' },
          { name: 'Configuration',      href: 'ai-analysts/creating-an-agent/configuration.html' },
          { name: 'Suggestions',        href: 'ai-analysts/creating-an-agent/suggestions.html' },
          { name: 'Saved Prompts',      href: 'ai-analysts/creating-an-agent/saved-prompts.html' }
        ]},
        { name: 'Monitoring', href: 'ai-analysts/monitoring/index.html', pages: [
          { name: 'Traces',    href: 'ai-analysts/monitoring/traces.html' },
          { name: 'Analytics', href: 'ai-analysts/monitoring/analytics.html' }
        ]}
      ]
    },
    {
      key: 'connections',
      label: 'Connections',
      href: 'connections/connect-a-data-source/index.html',
      pages: [
        { name: 'Data Sources (DB/DWH)', href: 'connections/connect-a-data-source/index.html', pages: [
          { name: 'CSV Files',                        href: 'connections/connect-a-data-source/csv-files.html' },
          { name: 'PostgreSQL',                       href: 'connections/connect-a-data-source/postgresql.html' },
          { name: 'MySQL',                            href: 'connections/connect-a-data-source/mysql.html' },
          { name: 'Snowflake',                        href: 'connections/connect-a-data-source/snowflake.html' },
          { name: 'BigQuery',                         href: 'connections/connect-a-data-source/bigquery.html' },
          { name: 'Microsoft SQL Server (MS SQL)',    href: 'connections/connect-a-data-source/microsoft-sql-server-ms-sql.html' },
          { name: 'Azure Synapse',                    href: 'connections/connect-a-data-source/azure-synapse.html' },
          { name: 'AWS Redshift',                     href: 'connections/connect-a-data-source/aws-redshift.html' },
          { name: 'MariaDB',                          href: 'connections/connect-a-data-source/mariadb.html' },
          { name: 'Microsoft Fabric',                 href: 'connections/connect-a-data-source/microsoft-fabric.html' },
          { name: 'Motherduck',                       href: 'connections/connect-a-data-source/motherduck.html' },
          { name: 'Databricks',                       href: 'connections/connect-a-data-source/databricks.html' },
          { name: 'Actian Data Platform',             href: 'connections/connect-a-data-source/actian-data-platform.html' },
          { name: 'Actian Zen',                       href: 'connections/connect-a-data-source/actian-zen.html' },
          { name: 'ClickHouse',                       href: 'connections/connect-a-data-source/clickhouse.html' },
          { name: 'Data Source Health Monitoring',    href: 'connections/data-source-health-monitoring.html' }
        ]},
        { name: 'Data Catalogs', href: 'connections/catalog/index.html', pages: [
          { name: 'Actian Data Intelligence Platform', href: 'connections/catalog/actian-data-intelligence-platform.html' }
        ]},
        { name: 'Messaging Apps', href: 'connections/messaging-apps/index.html', pages: [
          { name: 'Slack',  href: 'connections/messaging-apps/slack.html' },
          { name: 'Teams',  href: 'connections/messaging-apps/teams.html' }
        ]},
        { name: 'Table Metadata', href: 'connections/table-metadata/index.html', pages: [
          { name: 'Manage metadata in the UI',   href: 'connections/table-metadata/manage-metadata-in-the-ui.html' },
          { name: 'Import metadata using YAML',  href: 'connections/table-metadata/import-metadata-using-yaml.html' }
        ]}
      ]
    },
    {
      key: 'semantic-layer',
      label: 'Semantic Layer',
      href: 'semantic-layer/overview.html',
      pages: [
        { name: 'Overview',  href: 'semantic-layer/overview.html' },
        { name: 'Models', href: 'semantic-layer/models/index.html', pages: [
          { name: 'Creating Models', href: 'semantic-layer/models/creating-models/index.html', pages: [
            { name: 'Creating Models with Steward', href: 'semantic-layer/models/creating-models/creating-models-with-steward.html' },
            { name: 'Creating Models from SQL',     href: 'semantic-layer/models/creating-models/creating-models-from-sql.html' },
            { name: 'Creating Models from Table',   href: 'semantic-layer/models/creating-models/creating-models-from-table.html' }
          ]},
          { name: 'Dimensions',         href: 'semantic-layer/models/dimensions.html' },
          { name: 'Measures',           href: 'semantic-layer/models/measures.html' },
          { name: 'Pre-defined Filters', href: 'semantic-layer/models/pre-defined-filters.html' },
          { name: 'Relationships',      href: 'semantic-layer/models/relationships.html' }
        ]},
        { name: 'Metrics',  href: 'semantic-layer/metrics.html' },
        { name: 'Glossary', href: 'semantic-layer/glossary.html' },
        { name: 'Semantic SQL (SemQL)', href: 'semantic-layer/semql/index.html', pages: [
          { name: 'Compilation & Dialects',         href: 'semantic-layer/semql/compilation-and-dialects.html' },
          { name: 'Core Syntax',                    href: 'semantic-layer/semql/core-syntax.html' },
          { name: 'Dimensions, Measures & Filters', href: 'semantic-layer/semql/dimensions-vs-measures.html' },
          { name: 'Geo Functions',                  href: 'semantic-layer/semql/geo-functions.html' },
          { name: 'Examples',                       href: 'semantic-layer/semql/examples.html' }
        ]}
      ]
    },
    {
      key: 'steward-ai-agent',
      label: 'Steward AI Agent',
      href: 'steward-ai-agent/using-steward.html',
      pages: [
        { name: 'Using Steward',           href: 'steward-ai-agent/using-steward.html' },
        { name: 'Proactive Steward Inbox', href: 'steward-ai-agent/steward-inbox.html' }
      ]
    },
    {
      key: 'settings',
      label: 'Settings',
      href: 'settings/general.html',
      pages: [
        { name: 'General',         href: 'settings/general.html' },
        { name: 'Members',         href: 'settings/members.html' },
        { name: 'Integrations',    href: 'settings/integrations.html' },
        { name: 'Notifications',   href: 'settings/notifications.html' },
        { name: 'Security',        href: 'settings/security.html' },
        { name: 'Profile',         href: 'settings/profile.html' },
        { name: 'Billing & Usage', href: 'settings/billing.html' },
        { name: 'Public API', href: 'public-api/index.html', pages: [
          { name: 'API Keys', href: 'public-api/api-keys.html' }
        ]}
      ]
    },
    {
      key: 'governance',
      label: 'Governance',
      href: 'governance/audit-logs.html',
      pages: [
        { name: 'Audit Logs', href: 'governance/audit-logs.html' },
        { name: 'Export Semantic Layer & Agents', href: 'governance/export-semantic-layer-and-agents/index.html', pages: [
          { name: 'Actian AI Analyst Lossless Format',    href: 'governance/export-semantic-layer-and-agents/wobby-lossless-format.html' },
          { name: 'Open Semantic Interchange Format', href: 'governance/export-semantic-layer-and-agents/open-semantic-interchange-format.html' }
        ]},
        { name: 'Import Semantic Layer & Agents', href: 'governance/import-semantic-layer-and-agents/index.html', pages: [
          { name: 'Import OSI Format',                          href: 'governance/import-semantic-layer-and-agents/import-osi-format.html' },
          { name: 'Import Actian AI Analyst Format (YAML / JSON)', href: 'governance/import-semantic-layer-and-agents/import-wobby-format-yaml-json.html' }
        ]},
        { name: 'How AI Analyst handles your data',         href: 'governance/how-ai-analyst-handles-your-data.html' },
        { name: 'How Actian AI Analyst protects your data', href: 'governance/how-wobby-protects-your-data.html' }
      ]
    },
    {
      key: 'public-api/reference',
      label: 'API Reference',
      href: 'public-api/reference/index.html',
      pages: [
        { name: 'Overview', href: 'public-api/reference/index.html' }
      ]
    }
  ];

  // Detect site root from first tab's resolved absolute URL.
  function getSiteRoot() {
    var tab = document.querySelector('.md-tabs__link');
    if (tab && tab.href) {
      return tab.href.substring(0, tab.href.lastIndexOf('/') + 1);
    }
    return window.location.origin + '/';
  }

  // Recursively build a list of page items (supports nesting)
  function buildPageList(pages, base, currentPath, depth) {
    var ul = document.createElement('ul');
    ul.className = 'cn-sublist cn-sublist--depth-' + depth;

    pages.forEach(function(page) {
      var li = document.createElement('li');
      li.className = 'cn-subitem';

      var hasChildren = page.pages && page.pages.length > 0;

      if (hasChildren) {
        var row = document.createElement('div');
        row.className = 'cn-subheader';

        var a = document.createElement('a');
        a.href = base + page.href;
        var isActive = currentPath.indexOf(page.href.replace(/\/index\.html$/, '').replace(/\.html$/, '')) !== -1;
        a.className = 'cn-sublink cn-sublink--parent' + (isActive ? ' cn-sublink--active' : '');
        a.textContent = page.name;
        if (page.href.indexOf('public-api/reference') !== -1) {
          a.setAttribute('data-instant-skip', '');
          a.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            window.location.href = a.href;
          });
        }
        row.appendChild(a);

        var arrow = document.createElement('span');
        arrow.className = 'cn-arrow cn-arrow--sub';
        arrow.innerHTML = '&#8250;';
        arrow.style.transform = 'rotate(90deg)';
        row.appendChild(arrow);

        li.appendChild(row);

        var childList = buildPageList(page.pages, base, currentPath, depth + 1);
        li.appendChild(childList);

        var collapsed = false;
        arrow.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          collapsed = !collapsed;
          childList.style.display = collapsed ? 'none' : '';
          arrow.style.transform = collapsed ? 'rotate(0deg)' : 'rotate(90deg)';
        });

      } else {
        var a = document.createElement('a');
        a.href = base + page.href;
        var isActive = currentPath.indexOf(page.href.replace(/\/index\.html$/, '').replace(/\.html$/, '')) !== -1
                       && page.href.replace(/\/index\.html$/, '').replace(/\.html$/, '').length > 5;
        a.className = 'cn-sublink' + (isActive ? ' cn-sublink--active' : '');
        a.textContent = page.name;
        if (page.href.indexOf('public-api/reference') !== -1) {
          a.setAttribute('data-instant-skip', '');
          a.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            window.location.href = a.href;
          });
        }
        li.appendChild(a);
      }

      ul.appendChild(li);
    });

    return ul;
  }

  // ─── NEW: scroll the sidebar so the active link is visible ───────────────
  function scrollToActive(sidebar) {
    // Give the browser one frame to finish layout before measuring
    requestAnimationFrame(function() {
      var activeLink = sidebar.querySelector('.cn-sublink--active, .cn-label--active');
      if (!activeLink) return;

      var scrollWrap = sidebar.closest('.md-sidebar__scrollwrap') || sidebar;
      var linkTop    = activeLink.getBoundingClientRect().top;
      var wrapTop    = scrollWrap.getBoundingClientRect().top;
      var wrapHeight = scrollWrap.clientHeight;
      var offset     = linkTop - wrapTop;

      // Only scroll if the active item isn't already fully visible
      if (offset < 0 || offset > wrapHeight - activeLink.offsetHeight) {
        // Centre it in the scroll container
        scrollWrap.scrollTop += offset - wrapHeight / 2 + activeLink.offsetHeight / 2;
      }
    });
  }
  // ─────────────────────────────────────────────────────────────────────────

  function buildNav() {
    var sidebar = document.querySelector('.md-sidebar--primary .md-sidebar__scrollwrap');
    if (!sidebar) return;

    var existing = sidebar.querySelector('.cn-nav');
    if (existing) existing.parentNode.removeChild(existing);

    var currentPath = window.location.pathname;
    var base = getSiteRoot();

    var nav = document.createElement('nav');
    nav.className = 'cn-nav';

    SECTIONS.forEach(function(section) {
      var isCurrentSection = currentPath.indexOf(section.key) !== -1;

      var item = document.createElement('div');
      item.className = 'cn-item' + (isCurrentSection ? ' cn-item--active' : '');

      var header = document.createElement('div');
      header.className = 'cn-header';

      var link = document.createElement('a');
      link.href = base + section.href;
      link.className = 'cn-label' + (isCurrentSection ? ' cn-label--active' : '');
      link.textContent = section.label;
      if (section.key === 'public-api/reference') {
        link.setAttribute('data-instant-skip', '');
        link.addEventListener('click', function(e) {
          e.stopPropagation();
          e.preventDefault();
          window.location.href = link.href;
        });
      }
      header.appendChild(link);

      var arrow = document.createElement('span');
      arrow.className = 'cn-arrow';
      arrow.innerHTML = '&#8250;';
      arrow.style.transform = 'rotate(90deg)';
      header.appendChild(arrow);

      item.appendChild(header);

      var subList = buildPageList(section.pages, base, currentPath, 1);
      item.appendChild(subList);

      var isCollapsed = false;
      arrow.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        isCollapsed = !isCollapsed;
        subList.style.display = isCollapsed ? 'none' : '';
        arrow.style.transform = isCollapsed ? 'rotate(0deg)' : 'rotate(90deg)';
      });

      nav.appendChild(item);
    });

    var nativeNav = sidebar.querySelector('.md-nav--primary');
    if (nativeNav) nativeNav.style.display = 'none';

    var inner = sidebar.querySelector('.md-sidebar__inner');
    if (inner) inner.insertBefore(nav, inner.firstChild);

    // ── Scroll active link into view after nav is inserted ──────────────────
    scrollToActive(sidebar);
    // ────────────────────────────────────────────────────────────────────────
  }

  function fixTabLinks() {
    var TAB_OVERRIDES = {
      'ai-analysts': 'agent/creating-an-agent/index.html'
    };
    var base = getSiteRoot();
    document.querySelectorAll('.md-tabs__link').forEach(function(tab) {
      var key = (tab.getAttribute('href') || '').replace(/\/+$/, '').split('/').pop();
      if (TAB_OVERRIDES[key]) {
        tab.href = base + TAB_OVERRIDES[key];
      }
    });
  }

  if (typeof document$ !== 'undefined') {
    document$.subscribe(function() { buildNav(); fixTabLinks(); });
  } else {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() { buildNav(); fixTabLinks(); });
    } else {
      buildNav(); fixTabLinks();
    }
  }
})();