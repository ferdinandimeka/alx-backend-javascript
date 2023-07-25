export default function getNeighborhoodsList() { // eslint-disable-line no-unused-vars
    this.sanFransiscoNeighborhoods = ['SOMA', 'Union Square'];

    const self = this;
    this.addNeighborhood = (newNeighborhood) => {
        self.sanFransiscoNeighborhoods.push(newNeighborhood);
        return self.sanFransiscoNeighborhoods;
    }
}