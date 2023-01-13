import main from '../images/main.png';
const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  title: {
    fontWeight: 500,
    fontSize: 24,
    textAlign: 'center',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    zIndex: '100',
  },
  image: {
    width: '500px',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
         <img style={styles.image} src={main} alt="Greeting icon" />
    </div>
  );
}
