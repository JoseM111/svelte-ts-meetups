<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
<!-- EventHandler<Event, HTMLFormElement> -->
<!-- ━━━━━━━━━ JS | TS ━━━━━━━━━ -->
<script lang="ts">
  import HeaderUIComponent from "./components/ui/HeaderUI.svelte"
  import MeetupsGridComponent from "./components/meetups/MeetupsGrid.svelte"
  import type { Meetup } from "./global/types"
  import TextInputComponent from "./components/ui/TextInput.svelte"
  import Button from "./components/ui/Button.svelte";
  /** #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  /**: - ©MEMBER-PROPERTIES| */
	  // |™═════════════════════════
  let title: string = ''
  let subtitle: string = ''
  let address: string = ''
  let imageURL: string = ''
  let email: string = ''
  let description: string = ''
  // let meetup: Meetup
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
		  email: 'codewithme@test.com'
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
		  email: 'swim_for_life@test.com'
	  },

  ]
  // |™═════════════════════════

  /**| ™- LABELED-STATEMENT |*/
  // |™════════════════════════════════

  // |™════════════════════════════════

  /** #™━━━━━━━━━━━━━━━━━━━ FUNCTION ━━━━━━━━━━━━━━━━━━━ */

  const addMeetup = () => {
	  //☰☰☰☰☰☰☰☰☰☰
	  const newMeetup: Meetup = {
		  //☰☰☰☰☰☰☰☰☰☰
		  id: Math.random().toString(),
		  title: title,
		  subtitle: subtitle,
		  description: description,
		  imageURL: imageURL,
		  address: address,
		  email: email,
	  }
	
	  // Adding our new meetup to our [...meetups] array
	  meetups = [ newMeetup, ...meetups ]
	  console.log( meetups )
  }
  // END-OF: addMeetup--
  
</script>

<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

<div class="AppContainer">
	<!-- ━━━━━━━━━━━━━━━ CONTAINER ━━━━━━━━━━━━━━━ -->
	
	<!--☰☰☰☰☰☰☰☰| HEADER-UI |☰☰☰☰☰☰☰☰☰-->
  <HeaderUIComponent />
	
	<!-- ══════════════════════════════ -->
	<main>
		
		<!----------------------------------------------|
		The submit event fires when the user clicks a
		submit button (<button> or <input type="submit">
		|----------------------------------------------->
		<form on:submit|preventDefault={addMeetup}>
			
			<TextInputComponent
				id="title"
				type="text"
				label="Title"
				bind:value={title}
			/>
			
			<TextInputComponent
				id="subtitle"
				type="text"
				label="SubTitle"
				bind:value={subtitle}
			/>
			
			<TextInputComponent
				id="address"
				type="text"
				label="Address"
				bind:value={address}
			/>
			
			<TextInputComponent
				id="email"
				type="email"
				label="Email"
				bind:value={email}
			/>
			
			<TextInputComponent
				id="imageURL"
				type="text"
				label="Image URL"
				bind:value={imageURL}
			/>
			
			<TextInputComponent
				id="description"
				controlType="textarea"
				label="Description"
				bind:value={description}
			/>
			
			<!--☰☰☰☰☰☰☰☰| Button(Submit) |☰☰☰☰☰☰☰☰☰-->
			<Button type="submit" caption="Save" />
			
		</form>
		
		<!--☰☰☰☰☰☰☰☰| MEETUPS-ITEM |☰☰☰☰☰☰☰☰☰-->
		<MeetupsGridComponent
			{meetups}
		/>

	</main>
	<!-- ══════════════════════════════ -->
	
	<!-- ━━━━━━━━━━━━━━━ CONTAINER ━━━━━━━━━━━━━━━ -->
</div>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

<!-- ━━━━━━━━━ CSS | SCSS | SASS ━━━━━━━━━ -->
<style lang="scss">
	@import 'public/styles/App.scss';
	@import '../public/styles/App';
	
	h1 {
		//color: mediumpurple;
	}
</style>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
