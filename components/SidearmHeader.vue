<template>
	<Navbar id="navigation" expand="lg" theme="dark" fixed="top">
		<Container>
			<NavbarBrand to="/">Sidearm POC</NavbarBrand>
			<NavbarToggler />
			<NavbarCollapse>
				<NavbarNavList margin="r-auto t-2 t-md-0">
					<NavItem>
						<NavLink to="/rosters">Rosters</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/schedules">Schedules</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/news">News</NavLink>
					</NavItem>
				</NavbarNavList>
			</NavbarCollapse>
		</Container>
	</Navbar>
</template>