FROM python:3.10-slim

WORKDIR /app

# Install system dependencies
# libgl1-mesa-glx is often needed for opencv if we add it later
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Expose port
EXPOSE 8080

# Run command
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8080"]
