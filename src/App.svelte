<!-- ⚫️⚫️⚫️⚫️⚫️⚫️⚫️⚫️⚫️🔵🔵🔵🔵🔵🔵🔵🔵━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ -->

<div class="AppContainer">
	<!-- ━━━━━━━━━━━━━━━ CONTAINER ━━━━━━━━━━━━━━━ -->
	
	<!--☰☰☰☰☰☰☰☰| HEADER-UI |☰☰☰☰☰☰☰☰☰-->
  <HeaderUIComponent />
	
	<!-- ══════════════════════════════ -->
	<main>
		
		<!--☰☰☰☰☰☰☰☰| MEETUPS-ITEM |☰☰☰☰☰☰☰☰☰-->
		<section class="sectionMeetups">
			{#each meetups as meetup}
				<!---->
				<MeetupsItemComponent />
			{/each}
		</section>

	</main>
	<!-- ══════════════════════════════ -->
	
  <!-- ━━━━━━━━━━━━━━━ CONTAINER ━━━━━━━━━━━━━━━ -->
</div>
<!-- ⚫️⚫️⚫️⚫️⚫️⚫️⚫️⚫️⚫️🔵🔵🔵🔵🔵🔵🔵🔵━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ -->

<!-- ━━━━━━━━━ JS | TS ━━━━━━━━━ -->
<script lang="ts">
  import HeaderUIComponent from "./components/ui/HeaderUI.svelte"
  import type {Meetup} from "./global/types"
  import MeetupsItemComponent from "./components/meetups/MeetupsItem.svelte";
  /** #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  /**: - ©MEMBER-PROPERTIES| */
	  // #™━━━━━━━━━━━━━━━━━━━━━
  let meetups: Meetup[] = [
		  //..........
		  {
			  id: 'm1',
			  title: 'Coding Bootcamp',
			  subtitle: 'Learn to code in 2 hours',
			  description: 'In this meetup, we will have experts that will teach you how to code!',
			  imageURL: 'https://images.unsplash.com/' +
				  'photo-1526925539332-aa3b66e35444?ixid=' +
				  'MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNvZGluZ3xlbnwwfHwwfHw%3D&ixlib=' +
				  'rb-1.2.1&auto=format&fit=crop&w=900&q=60',
			  address: '17 St HardKnocks, Suite 4, Floor 2',
			  contactEmail: 'codewithme@test.com'
		  },
		  {
			  id: 'm2',
			  title: 'Swim Together',
			  subtitle: 'Let\'s go swimming',
			  description: 'Swimming our stress away, & letting the water flow!',
			  imageURL: 'https://images.unsplash.com/photo-1564167776935-d9d49beabba5?ixid=' +
				  'MnwxMjA3fDB8MHxzZWFyY2h8MTMzfHxzd2ltbWluZ3xlbnwwfHwwfHw%3D&ixlib=' +
				  'rb-1.2.1&auto=format&fit=crop&w=900&q=60',
			  address: '10 Allen St, Bldg 1, Floor 7',
			  contactEmail: 'swim_for_life@test.com'
		  },
	
	  ]
  // #™━━━━━━━━━━━━━━━━━━━━━

  /**| ™- LABELED-STATEMENT |*/
  // #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  /** #™━━━━━━━━━━━━━━━━━━━ FUNCTION ━━━━━━━━━━━━━━━━━━━ */


</script>

<!-- ━━━━━━━━━ CSS | SCSS | SASS ━━━━━━━━━ -->
<style lang="scss">
	@import 'public/styles/App.scss';
  @import '../public/styles/App';
  
  h1 {
    //color: mediumpurple;
  }
</style>
<!-- ⚫️⚫️⚫️⚫️⚫️⚫️⚫️⚫️⚫️🔵🔵🔵🔵🔵🔵🔵🔵━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ -->
