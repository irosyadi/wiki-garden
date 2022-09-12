---
citekey: {{citekey}}  
title: "{{title}}"
year: {{date | format("YYYY")}}
---

### {{title}}  
**Bibliography**
>{% if bibliography %}  
>{{bibliography}}  
>{% endif %}  

**Links**
>[**Open in Zotero Web**]({{uri}})   
>[**Open in Zotero Desktop**]({{desktopURI}})  

>{%- for attachment in attachments | filterby("path", "endswith", ".pdf") %}  
> **PDF Link:** [{{attachment.title}}](file:///{{attachment.path | replace(" ", "%20")}})
> {%- endfor -%}  
📄    

---
**Notes**

{% if markdownNotes %}  
{{markdownNotes}}
{% endif %}

---
**Annotations**

{% if formattedAnnotations %}  
{{formattedAnnotations}}
{% endif %}