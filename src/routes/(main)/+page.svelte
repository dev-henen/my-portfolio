<script lang="ts">
  import Hero       from "$lib/components/Hero.svelte";
  import Projects   from "$lib/components/Projects.svelte";
  import Experience from "$lib/components/Experience.svelte";
  import About      from "$lib/components/About.svelte";
  import Skills     from "$lib/components/Skills.svelte";
  import Contact    from "$lib/components/Contact.svelte";

  export let data;
</script>

<Hero       stats={data.stats} />
<Projects   projects={data.projects} />
<Experience experience={data.experience} />
<About      myEmail={data.myEmail} numberOfWOrkYears={data.numberOfWOrkYears} />
<Skills     skills={data.skills} />
<Contact    myEmail={data.myEmail} />
