# Use an official GCC runtime as a parent image
FROM gcc:latest

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . .

# Install CMake
RUN apt-get update && apt-get install -y cmake

# Build the project
RUN cmake . && make

# Run the executable
CMD ["./ChessGame"]
