import { Box, Container, SpeedDial, SpeedDialIcon } from '@mui/material';

const Footer = () => {
	const handleModalOpen = () => {
		console.log('Есть контакт');
	};
	return (
		<>
			<Box
				component='footer'
				sx={{
					padding: '25px 0',
				}}>
				<Container maxWidth='lg'></Container>
				<SpeedDial
					ariaLabel='SpeedDial basic example'
					sx={{ position: 'fixed', bottom: 16, right: 16 }}
					icon={<SpeedDialIcon />}
					onClick={handleModalOpen}></SpeedDial>
			</Box>
		</>
	);
};

export default Footer;
